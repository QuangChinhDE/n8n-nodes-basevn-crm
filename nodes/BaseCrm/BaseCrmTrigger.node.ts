import type {
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IDataObject,
} from 'n8n-workflow';

export class BaseCrmTrigger implements INodeType {
	usableAsTool = true;

	description: INodeTypeDescription = {
		displayName: 'BaseVN - App CRM Trigger',
		name: 'baseCrmTrigger',
		icon: 'file:../../icons/crm.svg',
		group: ['trigger'],
		version: 1,
		description: 'Starts the workflow when BaseVN CRM webhook events occur',
		defaults: {
			name: 'BaseVN - App CRM Trigger',
		},
		inputs: [],
		outputs: ['main'],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: '={{$parameter["path"]}}',
			},
		],
		properties: [
			{
				displayName: 'Webhook Path',
				name: 'path',
				type: 'string',
				default: 'webhook',
				required: true,
				placeholder: 'webhook',
				description: 'The path for the webhook URL. Leave as default or customize it.',
			},
			{
				displayName: 'Event Type',
				name: 'eventType',
				type: 'options',
				options: [
					{
						name: 'Account Events',
						value: 'account',
						description: 'Trigger on account create/update',
					},
					{
						name: 'All Events',
						value: 'all',
						description: 'Trigger on any CRM event',
					},
					{
						name: 'Contact Events',
						value: 'contact',
						description: 'Trigger on contact create/update',
					},
					{
						name: 'Deal Events',
						value: 'deal',
						description: 'Trigger on deal create/update/delete',
					},
					{
						name: 'Lead Events',
						value: 'lead',
						description: 'Trigger on lead create/update',
					},
				],
				default: 'all',
				description: 'Filter webhook by event type',
			},
			{
				displayName: 'Response Selector',
				name: 'responseSelector',
				type: 'options',
				options: [
					{
						name: 'Full Payload',
						value: '',
						description: 'Return complete webhook payload',
					},
					{
						name: 'Body Only',
						value: 'body',
						description: 'Return only the body data',
					},
					{
						name: 'Simplified Info',
						value: 'simplified',
						description: 'Return simplified CRM object information',
					},
				],
				default: 'body',
				description: 'Select which data to return from webhook',
			},
		],
		usableAsTool: true,
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData() as IDataObject;
		const responseSelector = this.getNodeParameter('responseSelector', '') as string;
		const eventType = this.getNodeParameter('eventType', '') as string;

		// Filter by event type if not 'all'
		if (eventType !== 'all') {
			const dataType = (bodyData.type as string) || '';
			if (!dataType.toLowerCase().includes(eventType.toLowerCase())) {
				// Skip this webhook if event type doesn't match
				return {
					workflowData: [[]],
				};
			}
		}

		// Process response based on selector
		let returnData: IDataObject = bodyData;

		if (responseSelector === 'simplified') {
			// Return simplified CRM object information
			const customFields: IDataObject = {};
			
			// Extract all custom_* fields
			Object.keys(bodyData).forEach((key) => {
				if (key.startsWith('custom_')) {
					customFields[key] = bodyData[key];
				}
			});

			returnData = {
				id: bodyData.id,
				type: bodyData.type,
				name: bodyData.name,
				content: bodyData.content,
				status: bodyData.status,
				stage_id: bodyData.stage_id,
				pipeline_id: bodyData.pipeline_id,
				owner_id: bodyData.owner_id,
				owner_name: bodyData.owner_name,
				service_id: bodyData.service_id,
				created_at: bodyData.created_at,
				updated_at: bodyData.updated_at,
				link: bodyData.link,
				followers: bodyData.followers,
				labels: bodyData.labels,
				// Include all custom fields if any
				...(Object.keys(customFields).length > 0 ? { custom_fields: customFields } : {}),
			};
		} else if (responseSelector === '') {
			// Return full payload including headers
			const headerData = this.getHeaderData();
			returnData = {
				headers: headerData,
				body: bodyData,
			};
		}
		// else: Return body only (default) - returnData is already bodyData

		return {
			workflowData: [this.helpers.returnJsonArray(returnData)],
		};
	}
}

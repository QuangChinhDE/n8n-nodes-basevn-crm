import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { cleanBody, processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const creatorId = this.getNodeParameter('creatorId', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const ppStage = this.getNodeParameter('ppStage', index) as number;
	
	// Optional parameters
	const ownerId = this.getNodeParameter('ownerId', index, 0) as number;
	const followers = this.getNodeParameter('followers', index, '') as string;
	const value = this.getNodeParameter('value', index, 0) as number;
	const valueCurrency = this.getNodeParameter('valueCurrency', index, 0) as number;
	const account = this.getNodeParameter('account', index, 0) as number;
	const contact = this.getNodeParameter('contact', index, 0) as number;
	const contactIds = this.getNodeParameter('contactIds', index, '') as string;
	const labels = this.getNodeParameter('labels', index, '') as string;
	const status = this.getNodeParameter('status', index, 'active') as string;
	const closedAt = this.getNodeParameter('closedAt', index, '') as string;
	const failedReasonId = this.getNodeParameter('failedReasonId', index, 0) as number;
	const failedReasonAdditional = this.getNodeParameter('failedReasonAdditional', index, '') as string;
	const expClosedAt = this.getNodeParameter('expClosedAt', index, '') as string;

	const body: Record<string, string | number> = {
		creator_id: creatorId,
		name,
		'pp-stage': ppStage,
	};

	if (ownerId) body.owner_id = ownerId;
	if (followers) body.followers = followers;
	if (value) body.value = value;
	if (valueCurrency) body['value-currency'] = valueCurrency;
	if (account) body.account = account;
	if (contact) body.contact = contact;
	if (contactIds) body.contact_ids = contactIds;
	if (labels) body.labels = labels;
	if (status !== 'active') body.status = status;
	if (closedAt) body.closed_at = closedAt;
	if (failedReasonId) body.failed_reason_id = failedReasonId;
	if (failedReasonAdditional) body.failed_reason_additional = failedReasonAdditional;
	if (expClosedAt) body.exp_closed_at = expClosedAt;

	const response = await crmApiRequest.call(this, 'POST', '/deal/create', cleanBody(body));
	const result = processResponse(response);
	return wrapData(result, index);
}

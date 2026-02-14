import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { cleanBody, processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const creatorId = this.getNodeParameter('creatorId', index) as number;
	const serviceId = this.getNodeParameter('serviceId', index) as number;
	const firstName = this.getNodeParameter('firstName', index) as string;

	// Optional parameters
	const stageId = this.getNodeParameter('stageId', index, 0) as number;
	const lastName = this.getNodeParameter('lastName', index, '') as string;
	const email = this.getNodeParameter('email', index, '') as string;
	const phone = this.getNodeParameter('phone', index, '') as string;
	const prefix = this.getNodeParameter('prefix', index, '') as string;
	const title = this.getNodeParameter('title', index, '') as string;
	const accountId = this.getNodeParameter('accountId', index, 0) as number;
	const ownerId = this.getNodeParameter('ownerId', index, 0) as number;
	const followers = this.getNodeParameter('followers', index, '') as string;
	const labels = this.getNodeParameter('labels', index, '') as string;

	const body: Record<string, string | number> = {
		creator_id: creatorId,
		service_id: serviceId,
		first_name: firstName,
	};

	if (stageId) body.stage_id = stageId;
	if (lastName) body.last_name = lastName;
	if (email) body.email = email;
	if (phone) body.phone = phone;
	if (prefix) body.prefix = prefix;
	if (title) body.title = title;
	if (accountId) body.account_id = accountId;
	if (ownerId) body.owner_id = ownerId;
	if (followers) body.followers = followers;
	if (labels) body.labels = labels;

	const response = await crmApiRequest.call(this, 'POST', '/contact/create', cleanBody(body));
	const result = processResponse(response);
	return wrapData(result, index);
}

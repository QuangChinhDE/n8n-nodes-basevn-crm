import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { cleanBody, processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const contactId = this.getNodeParameter('contactId', index) as number;
	const userId = this.getNodeParameter('userId', index) as number;
	const firstName = this.getNodeParameter('firstName', index) as string;

	// Optional parameters
	const lastName = this.getNodeParameter('lastName', index, '') as string;
	const email = this.getNodeParameter('email', index, '') as string;
	const phone = this.getNodeParameter('phone', index, '') as string;
	const prefix = this.getNodeParameter('prefix', index, '') as string;
	const title = this.getNodeParameter('title', index, '') as string;
	const accountId = this.getNodeParameter('accountId', index, 0) as number;
	const labels = this.getNodeParameter('labels', index, '') as string;
	const followers = this.getNodeParameter('followers', index, '') as string;

	const body: Record<string, string | number> = {
		id: contactId,
		user_id: userId,
		first_name: firstName,
	};

	if (lastName) body.last_name = lastName;
	if (email) body.email = email;
	if (phone) body.phone = phone;
	if (prefix) body.prefix = prefix;
	if (title) body.title = title;
	if (accountId) body.account_id = accountId;
	if (labels) body.labels = labels;
	if (followers) body.followers = followers;

	const response = await crmApiRequest.call(this, 'POST', '/contact/edit', cleanBody(body));
	const result = processResponse(response);
	return wrapData(result, index);
}

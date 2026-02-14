import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { cleanBody, processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const accountId = this.getNodeParameter('accountId', index) as number;
	const userId = this.getNodeParameter('userId', index) as number;
	const name = this.getNodeParameter('name', index) as string;

	// Optional parameters
	const labels = this.getNodeParameter('labels', index, '') as string;
	const followers = this.getNodeParameter('followers', index, '') as string;

	const body: Record<string, string | number> = {
		id: accountId,
		user_id: userId,
		name,
	};

	if (labels) body.labels = labels;
	if (followers) body.followers = followers;

	const response = await crmApiRequest.call(this, 'POST', '/account/edit', cleanBody(body));
	const result = processResponse(response);
	return wrapData(result, index);
}

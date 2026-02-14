import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { cleanBody, processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const creatorId = this.getNodeParameter('creatorId', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const serviceId = this.getNodeParameter('serviceId', index) as number;

	// Optional parameters
	const ownerId = this.getNodeParameter('ownerId', index, 0) as number;
	const followers = this.getNodeParameter('followers', index, '') as string;
	const labels = this.getNodeParameter('labels', index, '') as string;

	const body: Record<string, string | number> = {
		creator_id: creatorId,
		name,
		service_id: serviceId,
	};

	if (ownerId) body.owner_id = ownerId;
	if (followers) body.followers = followers;
	if (labels) body.labels = labels;

	const response = await crmApiRequest.call(this, 'POST', '/account/create', cleanBody(body));
	const result = processResponse(response);
	return wrapData(result, index);
}

import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', index) as number;
	const body = { service_id: serviceId };
	const response = await crmApiRequest.call(this, 'POST', '/contact/service/get.segments', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

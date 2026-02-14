import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const contactId = this.getNodeParameter('contactId', index) as number;
	const body = { id: contactId };
	const response = await crmApiRequest.call(this, 'POST', '/contact/get', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

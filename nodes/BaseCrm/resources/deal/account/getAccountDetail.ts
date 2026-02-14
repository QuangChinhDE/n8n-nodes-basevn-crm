import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const accountId = this.getNodeParameter('accountId', index) as number;
	const body = { id: accountId };
	const response = await crmApiRequest.call(this, 'POST', '/account/get', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

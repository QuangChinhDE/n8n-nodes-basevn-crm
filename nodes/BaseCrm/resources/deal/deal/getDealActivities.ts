import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const dealId = this.getNodeParameter('dealId', index) as number;
	const userId = this.getNodeParameter('userId', index) as number;
	const body = { id: dealId, user_id: userId };
	const response = await crmApiRequest.call(this, 'POST', '/deal/get.activities', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

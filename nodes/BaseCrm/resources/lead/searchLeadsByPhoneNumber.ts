import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../shared/transport';
import { processResponse, wrapData } from '../../shared/utils';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const phoneNumber = this.getNodeParameter('phoneNumber', index) as string;

	const body = {
		phone: phoneNumber,
	};

	const response = await crmApiRequest.call(this, 'POST', '/lead/gets.byphone', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

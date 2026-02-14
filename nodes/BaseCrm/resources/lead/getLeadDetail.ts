import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../shared/transport';
import { processResponse, wrapData } from '../../shared/utils';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const leadId = this.getNodeParameter('leadId', index) as number;

	const body = {
		lead_id: leadId,
	};

	const response = await crmApiRequest.call(this, 'POST', '/lead/get', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

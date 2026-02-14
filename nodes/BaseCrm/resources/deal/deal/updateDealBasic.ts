import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { cleanBody, processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const dealId = this.getNodeParameter('dealId', index) as number;
	const userId = this.getNodeParameter('userId', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	
	// Optional parameters
	const value = this.getNodeParameter('value', index, 0) as number;
	const valueCurrency = this.getNodeParameter('valueCurrency', index, 0) as number;
	const labels = this.getNodeParameter('labels', index, '') as string;
	const followers = this.getNodeParameter('followers', index, '') as string;
	const expClosedAt = this.getNodeParameter('expClosedAt', index, '') as string;

	const body: Record<string, string | number> = {
		id: dealId,
		user_id: userId,
		name,
	};

	if (value) body.value = value;
	if (valueCurrency) body['value-currency'] = valueCurrency;
	if (labels) body.labels = labels;
	if (followers) body.followers = followers;
	if (expClosedAt) body.exp_closed_at = expClosedAt;

	const response = await crmApiRequest.call(this, 'POST', '/deal/edit.basic', cleanBody(body));
	const result = processResponse(response);
	return wrapData(result, index);
}

import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const leadId = this.getNodeParameter('leadId', index) as number;
	const userId = this.getNodeParameter('userId', index) as number;
	const content = this.getNodeParameter('content', index) as string;
	const color = this.getNodeParameter('color', index, '') as string;

	const body: Record<string, string | number> = {
		lead_id: leadId,
		user_id: userId,
		content,
	};

	if (color) body.color = color;

	const response = await crmApiRequest.call(this, 'POST', '/lead/feed/note', body, true);
	const result = processResponse(response);
	return wrapData(result, index);
}

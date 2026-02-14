import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const username = this.getNodeParameter('username', index) as string;
	const sourceType = this.getNodeParameter('sourceType', index) as string;
	const sourceId = this.getNodeParameter('sourceId', index) as number;
	const stime = this.getNodeParameter('stime', index) as string;
	const outcome = this.getNodeParameter('outcome', index) as string;
	const direction = this.getNodeParameter('direction', index) as string;
	const content = this.getNodeParameter('content', index, '') as string;

	const body: Record<string, string | number> = {
		username,
		source_type: sourceType,
		source_id: sourceId,
		metatype: 'calllog',
		stime,
		outcome,
		direction,
	};

	if (content) body.content = content;

	const response = await crmApiRequest.call(this, 'POST', '/feed/create/calllog', body, true);
	const result = processResponse(response);
	return wrapData(result, index);
}

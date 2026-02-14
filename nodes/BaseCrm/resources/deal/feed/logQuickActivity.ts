import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const username = this.getNodeParameter('username', index) as string;
	const sourceType = this.getNodeParameter('sourceType', index) as string;
	const sourceId = this.getNodeParameter('sourceId', index) as number;
	const content = this.getNodeParameter('content', index) as string;
	const stime = this.getNodeParameter('stime', index) as string;
	const name = this.getNodeParameter('name', index, '') as string;

	const body: Record<string, string | number> = {
		username,
		source_type: sourceType,
		source_id: sourceId,
		metatype: 'quicklog',
		content,
		stime,
	};

	if (name) body.name = name;

	const response = await crmApiRequest.call(this, 'POST', '/feed/create/quicklog', body, true);
	const result = processResponse(response);
	return wrapData(result, index);
}

import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const username = this.getNodeParameter('username', index) as string;
	const sourceType = this.getNodeParameter('sourceType', index) as string;
	const sourceId = this.getNodeParameter('sourceId', index) as number;
	const stime = this.getNodeParameter('stime', index) as string;
	const outcome = this.getNodeParameter('outcome', index) as string;
	const meetingType = this.getNodeParameter('meetingType', index) as string;
	const content = this.getNodeParameter('content', index, '') as string;

	const body: Record<string, string | number> = {
		username,
		source_type: sourceType,
		source_id: sourceId,
		metatype: 'meetinglog',
		stime,
		outcome,
		meeting_type: meetingType,
	};

	if (content) body.content = content;

	const response = await crmApiRequest.call(this, 'POST', '/feed/create/meetinglog', body, true);
	const result = processResponse(response);
	return wrapData(result, index);
}

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
	const stime = this.getNodeParameter('stime', index) as string;
	const meetingType = this.getNodeParameter('meetingType', index) as string;
	const outcome = this.getNodeParameter('outcome', index) as string;

	const body = {
		lead_id: leadId,
		user_id: userId,
		content,
		stime,
		meeting_type: meetingType,
		outcome,
	};

	const response = await crmApiRequest.call(this, 'POST', '/lead/feed/meetinglog', body, true);
	const result = processResponse(response);
	return wrapData(result, index);
}

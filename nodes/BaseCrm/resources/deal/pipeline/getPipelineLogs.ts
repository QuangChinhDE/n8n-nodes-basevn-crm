import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const pipelineId = this.getNodeParameter('pipelineId', index) as number;
	const action = this.getNodeParameter('action', index, '') as string;
	const userId = this.getNodeParameter('userId', index, 0) as number;
	const stime = this.getNodeParameter('stime', index, '') as string;
	const etime = this.getNodeParameter('etime', index, '') as string;
	const page = this.getNodeParameter('page', index, 1) as number;
	const limit = this.getNodeParameter('limit', index, 50) as number;

	const body: Record<string, string | number> = {
		id: pipelineId,
		page,
		limit,
	};

	if (action) body.action = action;
	if (userId) body.user_id = userId;
	if (stime) body.stime = stime;
	if (etime) body.etime = etime;

	const response = await crmApiRequest.call(this, 'POST', '/pipeline/get.logs', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

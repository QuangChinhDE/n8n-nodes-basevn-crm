import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const pipelineId = this.getNodeParameter('pipelineId', index) as number;
	const page = this.getNodeParameter('page', index, 1) as number;
	const limit = this.getNodeParameter('limit', index, 100) as number;
	const status = this.getNodeParameter('status', index, '') as string;
	const sinceStime = this.getNodeParameter('sinceStime', index, 0) as number;
	const sinceEtime = this.getNodeParameter('sinceEtime', index, 0) as number;
	const lastUpdateStime = this.getNodeParameter('lastUpdateStime', index, 0) as number;
	const lastUpdateEtime = this.getNodeParameter('lastUpdateEtime', index, 0) as number;
	const stageIds = this.getNodeParameter('stageIds', index, '') as string;

	const body: Record<string, string | number> = {
		id: pipelineId,
		page,
		limit,
	};

	if (status) body.status = status;
	if (sinceStime) body.since_stime = sinceStime;
	if (sinceEtime) body.since_etime = sinceEtime;
	if (lastUpdateStime) body.last_update_stime = lastUpdateStime;
	if (lastUpdateEtime) body.last_update_etime = lastUpdateEtime;
	if (stageIds) body.stage_ids = stageIds;

	const response = await crmApiRequest.call(this, 'POST', '/pipeline/deals', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../shared/transport';
import { processResponse, wrapData } from '../../shared/utils';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', index) as number;
	const page = this.getNodeParameter('page', index, 1) as number;
	const startTime = this.getNodeParameter('startTime', index, '') as string;
	const endTime = this.getNodeParameter('endTime', index, '') as string;
	const stageId = this.getNodeParameter('stageId', index, '') as string;

	const body: Record<string, string | number> = {
		service_id: serviceId,
		page,
	};

	if (startTime) body.start_time = startTime;
	if (endTime) body.end_time = endTime;
	if (stageId) body.stage_id = stageId;

	const response = await crmApiRequest.call(this, 'POST', '/lead/list', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

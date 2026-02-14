import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { crmApiRequest } from '../../../shared/transport';
import { processResponse, wrapData } from '../../../shared/utils';

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const dealId = this.getNodeParameter('dealId', index) as number;
	const userId = this.getNodeParameter('userId', index) as number;
	const status = this.getNodeParameter('status', index) as string;
	
	// Optional parameters for lost status
	const failedReasonId = this.getNodeParameter('failedReasonId', index, 0) as number;
	const failedReasonAdditional = this.getNodeParameter('failedReasonAdditional', index, '') as string;

	const body: Record<string, string | number> = {
		id: dealId,
		user_id: userId,
		status,
	};

	if (failedReasonId) body.failed_reason_id = failedReasonId;
	if (failedReasonAdditional) body.failed_reason_additional = failedReasonAdditional;

	const response = await crmApiRequest.call(this, 'POST', '/deal/edit.status', body);
	const result = processResponse(response);
	return wrapData(result, index);
}

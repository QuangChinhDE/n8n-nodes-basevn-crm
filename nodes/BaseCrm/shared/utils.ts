import type { IDataObject, INodeExecutionData } from 'n8n-workflow';

export function cleanBody(body: IDataObject): IDataObject {
	const cleaned: IDataObject = {};
	for (const key in body) {
		if (body[key] !== undefined && body[key] !== null && body[key] !== '') {
			cleaned[key] = body[key];
		}
	}
	return cleaned;
}

export function handleApiError(error: Error & { response?: { data?: { message?: string } } }): never {
	if (error.response) {
		const errorData = error.response.data;
		throw new Error(`CRM API Error: ${errorData?.message || error.message}`);
	}
	throw error;
}

export function processResponse(response: IDataObject): IDataObject {
	if (response.error_code !== 0) {
		throw new Error(`CRM API Error: ${response.error_msg || 'Unknown error'}`);
	}
	return (response.data as IDataObject) || response;
}

export function wrapData(result: IDataObject | IDataObject[], index: number): INodeExecutionData[] {
	const returnData: INodeExecutionData[] = [];
	
	if (Array.isArray(result)) {
		result.forEach((item) => {
			returnData.push({
				json: item,
				pairedItem: index,
			});
		});
	} else {
		returnData.push({
			json: result,
			pairedItem: index,
		});
	}
	
	return returnData;
}

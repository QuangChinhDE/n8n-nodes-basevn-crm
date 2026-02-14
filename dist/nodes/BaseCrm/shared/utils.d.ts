import type { IDataObject, INodeExecutionData } from 'n8n-workflow';
export declare function cleanBody(body: IDataObject): IDataObject;
export declare function handleApiError(error: Error & {
    response?: {
        data?: {
            message?: string;
        };
    };
}): never;
export declare function processResponse(response: IDataObject): IDataObject;
export declare function wrapData(result: IDataObject | IDataObject[], index: number): INodeExecutionData[];

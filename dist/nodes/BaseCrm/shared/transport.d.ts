import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
export declare function crmApiRequest(this: IExecuteFunctions, method: string, endpoint: string, body?: IDataObject, useMultipart?: boolean): Promise<IDataObject>;

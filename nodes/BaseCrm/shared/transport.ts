import type { IExecuteFunctions, IDataObject, IHttpRequestMethods } from 'n8n-workflow';

export async function crmApiRequest(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	useMultipart: boolean = false,
): Promise<IDataObject> {
	// Determine which credential to use based on the resource
	const resource = this.getNodeParameter('resource', 0) as string;
	const credentialType = resource === 'lead' ? 'baseCrmLeadApi' : 'baseCrmDealApi';

	const credentials = await this.getCredentials(credentialType);
	const domain = credentials.domain as string;
	const accessToken = credentials.accessToken as string;
	const password = credentials.password as string;

	// Add credentials to body
	body.access_token = accessToken;
	body.password = password;

	let requestBody: string | IDataObject;
	let contentType: string;

	if (useMultipart) {
		// For multipart/form-data, pass body as object for n8n to handle
		requestBody = body;
		contentType = 'multipart/form-data';
	} else {
		// Convert body to form-urlencoded format
		requestBody = Object.keys(body)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(body[key])))
			.join('&');
		contentType = 'application/x-www-form-urlencoded';
	}

	// Build base URL based on resource type
	let baseUrl: string;
	if (resource === 'lead') {
		baseUrl = `https://apis.${domain}/leads`;
	} else {
		// Deal modules (pipeline, deal, account, contact, feed)
		baseUrl = `https://apis.${domain}/sales/v1`;
	}

	const options = {
		method: method as IHttpRequestMethods,
		body: requestBody,
		url: `${baseUrl}${endpoint}`,
		headers: {
			'Content-Type': contentType,
		},
		json: false,
	};

	try {
		const response = await this.helpers.httpRequest(options);
		return JSON.parse(response as string);
	} catch (error) {
		throw new Error(`CRM API request failed: ${(error as Error).message}`);
	}
}

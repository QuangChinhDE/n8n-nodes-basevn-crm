"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crmApiRequest = crmApiRequest;
async function crmApiRequest(method, endpoint, body = {}, useMultipart = false) {
    // Determine which credential to use based on the resource
    const resource = this.getNodeParameter('resource', 0);
    const credentialType = resource === 'lead' ? 'baseCrmLeadApi' : 'baseCrmDealApi';
    const credentials = await this.getCredentials(credentialType);
    const domain = credentials.domain;
    const accessToken = credentials.accessToken;
    const password = credentials.password;
    // Add credentials to body
    body.access_token = accessToken;
    body.password = password;
    let requestBody;
    let contentType;
    if (useMultipart) {
        // For multipart/form-data, pass body as object for n8n to handle
        requestBody = body;
        contentType = 'multipart/form-data';
    }
    else {
        // Convert body to form-urlencoded format
        requestBody = Object.keys(body)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(body[key])))
            .join('&');
        contentType = 'application/x-www-form-urlencoded';
    }
    // Build base URL based on resource type
    let baseUrl;
    if (resource === 'lead') {
        baseUrl = `https://apis.${domain}/leads`;
    }
    else {
        // Deal modules (pipeline, deal, account, contact, feed)
        baseUrl = `https://apis.${domain}/sales/v1`;
    }
    const options = {
        method: method,
        body: requestBody,
        url: `${baseUrl}${endpoint}`,
        headers: {
            'Content-Type': contentType,
        },
        json: false,
    };
    try {
        const response = await this.helpers.httpRequest(options);
        return JSON.parse(response);
    }
    catch (error) {
        throw new Error(`CRM API request failed: ${error.message}`);
    }
}
//# sourceMappingURL=transport.js.map
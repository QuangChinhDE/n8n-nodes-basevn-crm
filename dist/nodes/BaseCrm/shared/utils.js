"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanBody = cleanBody;
exports.handleApiError = handleApiError;
exports.processResponse = processResponse;
exports.wrapData = wrapData;
function cleanBody(body) {
    const cleaned = {};
    for (const key in body) {
        if (body[key] !== undefined && body[key] !== null && body[key] !== '') {
            cleaned[key] = body[key];
        }
    }
    return cleaned;
}
function handleApiError(error) {
    if (error.response) {
        const errorData = error.response.data;
        throw new Error(`CRM API Error: ${(errorData === null || errorData === void 0 ? void 0 : errorData.message) || error.message}`);
    }
    throw error;
}
function processResponse(response) {
    if (response.error_code !== 0) {
        throw new Error(`CRM API Error: ${response.error_msg || 'Unknown error'}`);
    }
    return response.data || response;
}
function wrapData(result, index) {
    const returnData = [];
    if (Array.isArray(result)) {
        result.forEach((item) => {
            returnData.push({
                json: item,
                pairedItem: index,
            });
        });
    }
    else {
        returnData.push({
            json: result,
            pairedItem: index,
        });
    }
    return returnData;
}
//# sourceMappingURL=utils.js.map
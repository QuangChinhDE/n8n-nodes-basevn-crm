"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const dealId = this.getNodeParameter('dealId', index);
    const userId = this.getNodeParameter('userId', index);
    const name = this.getNodeParameter('name', index);
    // Optional parameters
    const value = this.getNodeParameter('value', index, 0);
    const valueCurrency = this.getNodeParameter('valueCurrency', index, 0);
    const labels = this.getNodeParameter('labels', index, '');
    const followers = this.getNodeParameter('followers', index, '');
    const expClosedAt = this.getNodeParameter('expClosedAt', index, '');
    const body = {
        id: dealId,
        user_id: userId,
        name,
    };
    if (value)
        body.value = value;
    if (valueCurrency)
        body['value-currency'] = valueCurrency;
    if (labels)
        body.labels = labels;
    if (followers)
        body.followers = followers;
    if (expClosedAt)
        body.exp_closed_at = expClosedAt;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/deal/edit.basic', (0, utils_1.cleanBody)(body));
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=updateDealBasic.js.map
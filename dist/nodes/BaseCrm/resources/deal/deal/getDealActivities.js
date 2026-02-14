"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const dealId = this.getNodeParameter('dealId', index);
    const userId = this.getNodeParameter('userId', index);
    const body = { id: dealId, user_id: userId };
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/deal/get.activities', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=getDealActivities.js.map
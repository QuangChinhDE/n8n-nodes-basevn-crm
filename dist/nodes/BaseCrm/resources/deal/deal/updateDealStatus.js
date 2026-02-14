"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const dealId = this.getNodeParameter('dealId', index);
    const userId = this.getNodeParameter('userId', index);
    const status = this.getNodeParameter('status', index);
    // Optional parameters for lost status
    const failedReasonId = this.getNodeParameter('failedReasonId', index, 0);
    const failedReasonAdditional = this.getNodeParameter('failedReasonAdditional', index, '');
    const body = {
        id: dealId,
        user_id: userId,
        status,
    };
    if (failedReasonId)
        body.failed_reason_id = failedReasonId;
    if (failedReasonAdditional)
        body.failed_reason_additional = failedReasonAdditional;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/deal/edit.status', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=updateDealStatus.js.map
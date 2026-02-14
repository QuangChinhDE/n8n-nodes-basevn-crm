"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const accountId = this.getNodeParameter('accountId', index);
    const userId = this.getNodeParameter('userId', index);
    const followers = this.getNodeParameter('followers', index);
    const body = {
        id: accountId,
        user_id: userId,
        followers,
    };
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/account/edit.followers', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=updateAccountFollowers.js.map
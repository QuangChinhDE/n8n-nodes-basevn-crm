"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const accountId = this.getNodeParameter('accountId', index);
    const userId = this.getNodeParameter('userId', index);
    const name = this.getNodeParameter('name', index);
    // Optional parameters
    const labels = this.getNodeParameter('labels', index, '');
    const followers = this.getNodeParameter('followers', index, '');
    const body = {
        id: accountId,
        user_id: userId,
        name,
    };
    if (labels)
        body.labels = labels;
    if (followers)
        body.followers = followers;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/account/edit', (0, utils_1.cleanBody)(body));
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=updateAccountBasic.js.map
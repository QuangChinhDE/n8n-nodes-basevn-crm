"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const leadId = this.getNodeParameter('leadId', index);
    const body = {
        lead_id: leadId,
    };
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/lead/feed/list', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=getLeadFeeds.js.map
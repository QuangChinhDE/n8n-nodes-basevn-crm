"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function execute(index) {
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/lead/services', {});
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=getLeadServices.js.map
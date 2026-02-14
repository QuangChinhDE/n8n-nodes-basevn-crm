"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function execute(index) {
    const phoneNumber = this.getNodeParameter('phoneNumber', index);
    const body = {
        phone: phoneNumber,
    };
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/lead/gets.byphone', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=searchLeadsByPhoneNumber.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const contactId = this.getNodeParameter('contactId', index);
    const userId = this.getNodeParameter('userId', index);
    const firstName = this.getNodeParameter('firstName', index);
    // Optional parameters
    const lastName = this.getNodeParameter('lastName', index, '');
    const email = this.getNodeParameter('email', index, '');
    const phone = this.getNodeParameter('phone', index, '');
    const prefix = this.getNodeParameter('prefix', index, '');
    const title = this.getNodeParameter('title', index, '');
    const accountId = this.getNodeParameter('accountId', index, 0);
    const labels = this.getNodeParameter('labels', index, '');
    const followers = this.getNodeParameter('followers', index, '');
    const body = {
        id: contactId,
        user_id: userId,
        first_name: firstName,
    };
    if (lastName)
        body.last_name = lastName;
    if (email)
        body.email = email;
    if (phone)
        body.phone = phone;
    if (prefix)
        body.prefix = prefix;
    if (title)
        body.title = title;
    if (accountId)
        body.account_id = accountId;
    if (labels)
        body.labels = labels;
    if (followers)
        body.followers = followers;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/contact/edit', (0, utils_1.cleanBody)(body));
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=updateContactInformation.js.map
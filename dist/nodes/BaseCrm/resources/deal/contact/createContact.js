"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const creatorId = this.getNodeParameter('creatorId', index);
    const serviceId = this.getNodeParameter('serviceId', index);
    const firstName = this.getNodeParameter('firstName', index);
    // Optional parameters
    const stageId = this.getNodeParameter('stageId', index, 0);
    const lastName = this.getNodeParameter('lastName', index, '');
    const email = this.getNodeParameter('email', index, '');
    const phone = this.getNodeParameter('phone', index, '');
    const prefix = this.getNodeParameter('prefix', index, '');
    const title = this.getNodeParameter('title', index, '');
    const accountId = this.getNodeParameter('accountId', index, 0);
    const ownerId = this.getNodeParameter('ownerId', index, 0);
    const followers = this.getNodeParameter('followers', index, '');
    const labels = this.getNodeParameter('labels', index, '');
    const body = {
        creator_id: creatorId,
        service_id: serviceId,
        first_name: firstName,
    };
    if (stageId)
        body.stage_id = stageId;
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
    if (ownerId)
        body.owner_id = ownerId;
    if (followers)
        body.followers = followers;
    if (labels)
        body.labels = labels;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/contact/create', (0, utils_1.cleanBody)(body));
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=createContact.js.map
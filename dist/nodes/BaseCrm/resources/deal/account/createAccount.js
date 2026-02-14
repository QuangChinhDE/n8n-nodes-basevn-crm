"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const creatorId = this.getNodeParameter('creatorId', index);
    const name = this.getNodeParameter('name', index);
    const serviceId = this.getNodeParameter('serviceId', index);
    // Optional parameters
    const ownerId = this.getNodeParameter('ownerId', index, 0);
    const followers = this.getNodeParameter('followers', index, '');
    const labels = this.getNodeParameter('labels', index, '');
    const body = {
        creator_id: creatorId,
        name,
        service_id: serviceId,
    };
    if (ownerId)
        body.owner_id = ownerId;
    if (followers)
        body.followers = followers;
    if (labels)
        body.labels = labels;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/account/create', (0, utils_1.cleanBody)(body));
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=createAccount.js.map
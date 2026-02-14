"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const creatorId = this.getNodeParameter('creatorId', index);
    const name = this.getNodeParameter('name', index);
    const ppStage = this.getNodeParameter('ppStage', index);
    // Optional parameters
    const ownerId = this.getNodeParameter('ownerId', index, 0);
    const followers = this.getNodeParameter('followers', index, '');
    const value = this.getNodeParameter('value', index, 0);
    const valueCurrency = this.getNodeParameter('valueCurrency', index, 0);
    const account = this.getNodeParameter('account', index, 0);
    const contact = this.getNodeParameter('contact', index, 0);
    const contactIds = this.getNodeParameter('contactIds', index, '');
    const labels = this.getNodeParameter('labels', index, '');
    const status = this.getNodeParameter('status', index, 'active');
    const closedAt = this.getNodeParameter('closedAt', index, '');
    const failedReasonId = this.getNodeParameter('failedReasonId', index, 0);
    const failedReasonAdditional = this.getNodeParameter('failedReasonAdditional', index, '');
    const expClosedAt = this.getNodeParameter('expClosedAt', index, '');
    const body = {
        creator_id: creatorId,
        name,
        'pp-stage': ppStage,
    };
    if (ownerId)
        body.owner_id = ownerId;
    if (followers)
        body.followers = followers;
    if (value)
        body.value = value;
    if (valueCurrency)
        body['value-currency'] = valueCurrency;
    if (account)
        body.account = account;
    if (contact)
        body.contact = contact;
    if (contactIds)
        body.contact_ids = contactIds;
    if (labels)
        body.labels = labels;
    if (status !== 'active')
        body.status = status;
    if (closedAt)
        body.closed_at = closedAt;
    if (failedReasonId)
        body.failed_reason_id = failedReasonId;
    if (failedReasonAdditional)
        body.failed_reason_additional = failedReasonAdditional;
    if (expClosedAt)
        body.exp_closed_at = expClosedAt;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/deal/create', (0, utils_1.cleanBody)(body));
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=createDeal.js.map
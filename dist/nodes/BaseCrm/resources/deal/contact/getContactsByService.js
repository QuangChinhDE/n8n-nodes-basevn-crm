"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const serviceId = this.getNodeParameter('serviceId', index);
    const page = this.getNodeParameter('page', index, 1);
    const limit = this.getNodeParameter('limit', index, 100);
    const sinceStime = this.getNodeParameter('sinceStime', index, 0);
    const sinceEtime = this.getNodeParameter('sinceEtime', index, 0);
    const lastUpdateStime = this.getNodeParameter('lastUpdateStime', index, 0);
    const lastUpdateEtime = this.getNodeParameter('lastUpdateEtime', index, 0);
    const stageIds = this.getNodeParameter('stageIds', index, '');
    const body = {
        service_id: serviceId,
        page,
        limit,
    };
    if (sinceStime)
        body.since_stime = sinceStime;
    if (sinceEtime)
        body.since_etime = sinceEtime;
    if (lastUpdateStime)
        body.last_update_stime = lastUpdateStime;
    if (lastUpdateEtime)
        body.last_update_etime = lastUpdateEtime;
    if (stageIds)
        body.stage_ids = stageIds;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/contact/list', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=getContactsByService.js.map
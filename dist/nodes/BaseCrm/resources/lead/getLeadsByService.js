"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../shared/transport");
const utils_1 = require("../../shared/utils");
async function execute(index) {
    const serviceId = this.getNodeParameter('serviceId', index);
    const page = this.getNodeParameter('page', index, 1);
    const startTime = this.getNodeParameter('startTime', index, '');
    const endTime = this.getNodeParameter('endTime', index, '');
    const stageId = this.getNodeParameter('stageId', index, '');
    const body = {
        service_id: serviceId,
        page,
    };
    if (startTime)
        body.start_time = startTime;
    if (endTime)
        body.end_time = endTime;
    if (stageId)
        body.stage_id = stageId;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/lead/list', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=getLeadsByService.js.map
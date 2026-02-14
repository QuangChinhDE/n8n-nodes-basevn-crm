"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const pipelineId = this.getNodeParameter('pipelineId', index);
    const action = this.getNodeParameter('action', index, '');
    const userId = this.getNodeParameter('userId', index, 0);
    const stime = this.getNodeParameter('stime', index, '');
    const etime = this.getNodeParameter('etime', index, '');
    const page = this.getNodeParameter('page', index, 1);
    const limit = this.getNodeParameter('limit', index, 50);
    const body = {
        id: pipelineId,
        page,
        limit,
    };
    if (action)
        body.action = action;
    if (userId)
        body.user_id = userId;
    if (stime)
        body.stime = stime;
    if (etime)
        body.etime = etime;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/pipeline/get.logs', body);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=getPipelineLogs.js.map
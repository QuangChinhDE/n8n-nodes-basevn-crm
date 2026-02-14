"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const username = this.getNodeParameter('username', index);
    const sourceType = this.getNodeParameter('sourceType', index);
    const sourceId = this.getNodeParameter('sourceId', index);
    const stime = this.getNodeParameter('stime', index);
    const outcome = this.getNodeParameter('outcome', index);
    const direction = this.getNodeParameter('direction', index);
    const content = this.getNodeParameter('content', index, '');
    const body = {
        username,
        source_type: sourceType,
        source_id: sourceId,
        metatype: 'calllog',
        stime,
        outcome,
        direction,
    };
    if (content)
        body.content = content;
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/feed/create/calllog', body, true);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=logPastCall.js.map
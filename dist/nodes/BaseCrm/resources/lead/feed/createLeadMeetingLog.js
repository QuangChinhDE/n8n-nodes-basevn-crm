"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const transport_1 = require("../../../shared/transport");
const utils_1 = require("../../../shared/utils");
async function execute(index) {
    const leadId = this.getNodeParameter('leadId', index);
    const userId = this.getNodeParameter('userId', index);
    const content = this.getNodeParameter('content', index);
    const stime = this.getNodeParameter('stime', index);
    const meetingType = this.getNodeParameter('meetingType', index);
    const outcome = this.getNodeParameter('outcome', index);
    const body = {
        lead_id: leadId,
        user_id: userId,
        content,
        stime,
        meeting_type: meetingType,
        outcome,
    };
    const response = await transport_1.crmApiRequest.call(this, 'POST', '/lead/feed/meetinglog', body, true);
    const result = (0, utils_1.processResponse)(response);
    return (0, utils_1.wrapData)(result, index);
}
//# sourceMappingURL=createLeadMeetingLog.js.map
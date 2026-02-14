"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCrm = void 0;
const deal = __importStar(require("./resources/deal"));
const lead = __importStar(require("./resources/lead"));
const descriptions_1 = require("./shared/descriptions");
class BaseCrm {
    constructor() {
        this.description = {
            displayName: 'BaseVN - App CRM',
            name: 'baseCrm',
            icon: 'file:../../icons/crm.svg',
            group: ['transform'],
            version: 1,
            usableAsTool: true,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with BaseVN CRM API',
            defaults: {
                name: 'BaseVN - App CRM',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'baseCrmLeadApi',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['lead'],
                        },
                    },
                },
                {
                    name: 'baseCrmDealApi',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['pipeline', 'deal', 'account', 'contact', 'feed'],
                        },
                    },
                },
            ],
            requestDefaults: {
                baseURL: 'https://apis.{{$credentials.domain}}',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Account',
                            value: 'account',
                        },
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                        {
                            name: 'Deal',
                            value: 'deal',
                        },
                        {
                            name: 'Feed',
                            value: 'feed',
                        },
                        {
                            name: 'Lead',
                            value: 'lead',
                        },
                        {
                            name: 'Pipeline',
                            value: 'pipeline',
                        },
                    ],
                    default: 'account',
                },
                ...descriptions_1.pipelineOperations,
                ...descriptions_1.pipelineFields,
                ...descriptions_1.dealOperations,
                ...descriptions_1.dealFields,
                ...descriptions_1.accountOperations,
                ...descriptions_1.accountFields,
                ...descriptions_1.contactOperations,
                ...descriptions_1.contactFields,
                ...descriptions_1.feedOperations,
                ...descriptions_1.feedFields,
                ...descriptions_1.leadOperations,
                ...descriptions_1.leadFields,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData = [];
                if (resource === 'pipeline') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'getAllPipelines') {
                        responseData = await deal.pipeline.getAllPipelines.execute.call(this, i);
                    }
                    else if (operation === 'getPipelineDetail') {
                        responseData = await deal.pipeline.getPipelineDetail.execute.call(this, i);
                    }
                    else if (operation === 'getDealsInPipeline') {
                        responseData = await deal.pipeline.getDealsInPipeline.execute.call(this, i);
                    }
                    else if (operation === 'getPipelineStages') {
                        responseData = await deal.pipeline.getPipelineStages.execute.call(this, i);
                    }
                    else if (operation === 'getPipelineSegments') {
                        responseData = await deal.pipeline.getPipelineSegments.execute.call(this, i);
                    }
                    else if (operation === 'getPipelineLogs') {
                        responseData = await deal.pipeline.getPipelineLogs.execute.call(this, i);
                    }
                }
                else if (resource === 'deal') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'createDeal') {
                        responseData = await deal.deal.createDeal.execute.call(this, i);
                    }
                    else if (operation === 'getDealDetail') {
                        responseData = await deal.deal.getDealDetail.execute.call(this, i);
                    }
                    else if (operation === 'getDealActivities') {
                        responseData = await deal.deal.getDealActivities.execute.call(this, i);
                    }
                    else if (operation === 'updateDealBasic') {
                        responseData = await deal.deal.updateDealBasic.execute.call(this, i);
                    }
                    else if (operation === 'deleteDeal') {
                        responseData = await deal.deal.deleteDeal.execute.call(this, i);
                    }
                    else if (operation === 'updateDealStatus') {
                        responseData = await deal.deal.updateDealStatus.execute.call(this, i);
                    }
                    else if (operation === 'updateDealOwner') {
                        responseData = await deal.deal.updateDealOwner.execute.call(this, i);
                    }
                }
                else if (resource === 'account') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'getAllAccountServices') {
                        responseData = await deal.account.getAllAccountServices.execute.call(this, i);
                    }
                    else if (operation === 'getAccountServiceSegments') {
                        responseData = await deal.account.getAccountServiceSegments.execute.call(this, i);
                    }
                    else if (operation === 'getAccountDetail') {
                        responseData = await deal.account.getAccountDetail.execute.call(this, i);
                    }
                    else if (operation === 'getAccountActivities') {
                        responseData = await deal.account.getAccountActivities.execute.call(this, i);
                    }
                    else if (operation === 'getAccountsByService') {
                        responseData = await deal.account.getAccountsByService.execute.call(this, i);
                    }
                    else if (operation === 'createAccount') {
                        responseData = await deal.account.createAccount.execute.call(this, i);
                    }
                    else if (operation === 'updateAccountBasic') {
                        responseData = await deal.account.updateAccountBasic.execute.call(this, i);
                    }
                    else if (operation === 'deleteAccount') {
                        responseData = await deal.account.deleteAccount.execute.call(this, i);
                    }
                    else if (operation === 'updateAccountOwner') {
                        responseData = await deal.account.updateAccountOwner.execute.call(this, i);
                    }
                    else if (operation === 'updateAccountFollowers') {
                        responseData = await deal.account.updateAccountFollowers.execute.call(this, i);
                    }
                }
                else if (resource === 'contact') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'getAllContactServices') {
                        responseData = await deal.contact.getAllContactServices.execute.call(this, i);
                    }
                    else if (operation === 'getServiceSegments') {
                        responseData = await deal.contact.getServiceSegments.execute.call(this, i);
                    }
                    else if (operation === 'getContactDetail') {
                        responseData = await deal.contact.getContactDetail.execute.call(this, i);
                    }
                    else if (operation === 'getContactActivities') {
                        responseData = await deal.contact.getContactActivities.execute.call(this, i);
                    }
                    else if (operation === 'getContactsByService') {
                        responseData = await deal.contact.getContactsByService.execute.call(this, i);
                    }
                    else if (operation === 'createContact') {
                        responseData = await deal.contact.createContact.execute.call(this, i);
                    }
                    else if (operation === 'updateContactInformation') {
                        responseData = await deal.contact.updateContactInformation.execute.call(this, i);
                    }
                    else if (operation === 'archiveContact') {
                        responseData = await deal.contact.archiveContact.execute.call(this, i);
                    }
                    else if (operation === 'unarchiveContact') {
                        responseData = await deal.contact.unarchiveContact.execute.call(this, i);
                    }
                    else if (operation === 'updateContactOwner') {
                        responseData = await deal.contact.updateContactOwner.execute.call(this, i);
                    }
                }
                else if (resource === 'feed') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'createNote') {
                        responseData = await deal.feed.createNote.execute.call(this, i);
                    }
                    else if (operation === 'logQuickActivity') {
                        responseData = await deal.feed.logQuickActivity.execute.call(this, i);
                    }
                    else if (operation === 'logPastCall') {
                        responseData = await deal.feed.logPastCall.execute.call(this, i);
                    }
                    else if (operation === 'logPastMeeting') {
                        responseData = await deal.feed.logPastMeeting.execute.call(this, i);
                    }
                }
                else if (resource === 'lead') {
                    const operation = this.getNodeParameter('operation', i);
                    if (operation === 'getLeadsByService') {
                        responseData = await lead.getLeadsByService.execute.call(this, i);
                    }
                    else if (operation === 'getLeadServices') {
                        responseData = await lead.getLeadServices.execute.call(this, i);
                    }
                    else if (operation === 'getLeadDetail') {
                        responseData = await lead.getLeadDetail.execute.call(this, i);
                    }
                    else if (operation === 'searchLeadsByPhoneNumber') {
                        responseData = await lead.searchLeadsByPhoneNumber.execute.call(this, i);
                    }
                    else if (operation === 'feed') {
                        const feedOperation = this.getNodeParameter('feedOperation', i);
                        if (feedOperation === 'createLeadNote') {
                            responseData = await lead.feed.createLeadNote.execute.call(this, i);
                        }
                        else if (feedOperation === 'createLeadLog') {
                            responseData = await lead.feed.createLeadLog.execute.call(this, i);
                        }
                        else if (feedOperation === 'createLeadCallLog') {
                            responseData = await lead.feed.createLeadCallLog.execute.call(this, i);
                        }
                        else if (feedOperation === 'createLeadMeetingLog') {
                            responseData = await lead.feed.createLeadMeetingLog.execute.call(this, i);
                        }
                        else if (feedOperation === 'getLeadFeeds') {
                            responseData = await lead.feed.getLeadFeeds.execute.call(this, i);
                        }
                    }
                }
                returnData.push(...responseData);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({
                        json: {
                            error: error.message,
                        },
                        pairedItem: { item: i },
                    });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.BaseCrm = BaseCrm;
//# sourceMappingURL=BaseCrm.node.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadFields = exports.leadOperations = exports.feedFields = exports.feedOperations = exports.contactFields = exports.contactOperations = exports.accountFields = exports.accountOperations = exports.dealFields = exports.dealOperations = exports.pipelineFields = exports.pipelineOperations = void 0;
// ==================== PIPELINE DESCRIPTIONS ====================
exports.pipelineOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['pipeline'],
            },
        },
        options: [
            {
                name: 'Get All Pipelines',
                value: 'getAllPipelines',
                action: 'Get all pipelines',
            },
            {
                name: 'Get Deals in Pipeline',
                value: 'getDealsInPipeline',
                action: 'Get deals in pipeline',
            },
            {
                name: 'Get Pipeline Detail',
                value: 'getPipelineDetail',
                action: 'Get pipeline detail',
            },
            {
                name: 'Get Pipeline Logs',
                value: 'getPipelineLogs',
                action: 'Get pipeline logs',
            },
            {
                name: 'Get Pipeline Segments',
                value: 'getPipelineSegments',
                action: 'Get pipeline segments',
            },
            {
                name: 'Get Pipeline Stages',
                value: 'getPipelineStages',
                action: 'Get pipeline stages',
            },
        ],
        default: 'getAllPipelines',
    },
];
exports.pipelineFields = [
    // Common field for all operations except getAllPipelines
    {
        displayName: 'Pipeline ID',
        name: 'pipelineId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getPipelineDetail', 'getDealsInPipeline', 'getPipelineStages', 'getPipelineSegments', 'getPipelineLogs'],
            },
        },
        default: 0,
        description: 'ID of the pipeline',
    },
    // Get Deals in Pipeline - Optional filters
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline', 'getPipelineLogs'],
            },
        },
        default: 1,
        description: 'Page number',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
        },
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: 50,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
        },
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getPipelineLogs'],
            },
        },
        default: 50,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'options',
        options: [
            {
                name: 'Active',
                value: 'active',
            },
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'Lost',
                value: 'lost',
            },
            {
                name: 'Won',
                value: 'won',
            },
        ],
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: 'active',
        description: 'Filter by deal status',
    },
    {
        displayName: 'Since Stime',
        name: 'sinceStime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: 0,
        description: 'Created time after timestamp',
    },
    {
        displayName: 'Since Etime',
        name: 'sinceEtime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: 0,
        description: 'Created time before timestamp',
    },
    {
        displayName: 'Last Update Stime',
        name: 'lastUpdateStime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: 0,
        description: 'Updated time after timestamp',
    },
    {
        displayName: 'Last Update Etime',
        name: 'lastUpdateEtime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: 0,
        description: 'Updated time before timestamp',
    },
    {
        displayName: 'Stage IDs',
        name: 'stageIds',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getDealsInPipeline'],
            },
        },
        default: '',
        description: 'Comma-separated stage IDs',
    },
    // Get Pipeline Logs - Optional filters
    {
        displayName: 'Action',
        name: 'action',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getPipelineLogs'],
            },
        },
        default: '',
        description: 'Action key filter',
    },
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getPipelineLogs'],
            },
        },
        default: 0,
        description: 'Filter by updater ID',
    },
    {
        displayName: 'Start Time',
        name: 'stime',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getPipelineLogs'],
            },
        },
        default: '',
    },
    {
        displayName: 'End Time',
        name: 'etime',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['pipeline'],
                operation: ['getPipelineLogs'],
            },
        },
        default: '',
    },
];
// ==================== DEAL DESCRIPTIONS ====================
exports.dealOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['deal'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new deal',
                action: 'Create a deal',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a deal',
                action: 'Delete a deal',
            },
            {
                name: 'Edit Basic',
                value: 'editBasic',
                description: 'Edit basic information for a deal',
                action: 'Edit basic for a deal',
            },
            {
                name: 'Edit Owner',
                value: 'editOwner',
                description: 'Edit deal owner',
                action: 'Edit deal owner',
            },
            {
                name: 'Edit Status',
                value: 'editStatus',
                description: 'Edit deal status',
                action: 'Edit deal status',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get deal detail',
                action: 'Get deal detail',
            },
            {
                name: 'Get Activities',
                value: 'getActivities',
                description: 'Get deal activities',
                action: 'Get deal activities',
            },
        ],
        default: 'create',
    },
];
exports.dealFields = [
    // Common Deal ID field for get/update/delete operations
    {
        displayName: 'Deal ID',
        name: 'dealId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['get', 'editBasic', 'editOwner', 'editStatus', 'getActivities', 'delete'],
            },
        },
        default: 0,
        description: 'ID of the deal',
    },
    // User ID field for operations requiring updater/viewer ID
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['get', 'editBasic', 'editOwner', 'editStatus', 'getActivities', 'delete'],
            },
        },
        default: 0,
        description: 'ID of the user performing the action',
    },
    // Create Deal - Required fields
    {
        displayName: 'Creator ID',
        name: 'creatorId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'ID or username of creator',
    },
    {
        displayName: 'Deal Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editBasic'],
            },
        },
        default: '',
        description: 'Name of the deal',
    },
    {
        displayName: 'Pipeline Stage ID',
        name: 'ppStage',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: 0,
    },
    // Create Deal - Optional fields
    {
        displayName: 'Owner ID',
        name: 'ownerId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'Deal owner (default = creator)',
    },
    {
        displayName: 'Owner ID',
        name: 'ownerId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['editOwner'],
            },
        },
        default: 0,
        description: 'New owner ID',
    },
    {
        displayName: 'Followers',
        name: 'followers',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editBasic'],
            },
        },
        default: '',
        description: 'Comma-separated usernames/IDs',
    },
    {
        displayName: 'Value',
        name: 'value',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editBasic'],
            },
        },
        default: 0,
        description: 'Deal value',
    },
    {
        displayName: 'Value Currency',
        name: 'valueCurrency',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editBasic'],
            },
        },
        default: 0,
        description: 'Currency ID',
    },
    {
        displayName: 'Account ID',
        name: 'account',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'Primary account ID',
    },
    {
        displayName: 'Contact ID',
        name: 'contact',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'Primary contact ID',
    },
    {
        displayName: 'Contact IDs',
        name: 'contactIds',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Secondary contact IDs (comma-separated)',
    },
    {
        displayName: 'Labels',
        name: 'labels',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editBasic'],
            },
        },
        default: '',
        description: 'Comma-separated label IDs',
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'options',
        options: [
            {
                name: 'Active',
                value: 'active',
            },
            {
                name: 'Lost',
                value: 'lost',
            },
            {
                name: 'Won',
                value: 'won',
            },
        ],
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: 'active',
        description: 'Deal status',
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'options',
        required: true,
        options: [
            {
                name: 'Active',
                value: 'active',
            },
            {
                name: 'Lost',
                value: 'lost',
            },
            {
                name: 'Won',
                value: 'won',
            },
        ],
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['editStatus'],
            },
        },
        default: 'active',
        description: 'New status for the deal',
    },
    {
        displayName: 'Closed At',
        name: 'closedAt',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Closed datetime',
    },
    {
        displayName: 'Failed Reason ID',
        name: 'failedReasonId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editStatus'],
            },
        },
        default: 0,
        description: 'Required if status = lost',
    },
    {
        displayName: 'Failed Reason Additional',
        name: 'failedReasonAdditional',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editStatus'],
            },
        },
        default: '',
        description: 'Additional lost reason',
    },
    {
        displayName: 'Expected Close Date',
        name: 'expClosedAt',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['deal'],
                operation: ['create', 'editBasic'],
            },
        },
        default: '',
    },
];
// ==================== ACCOUNT DESCRIPTIONS ====================
exports.accountOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['account'],
            },
        },
        options: [
            {
                name: 'Create Account',
                value: 'createAccount',
                description: 'Create a new account',
                action: 'Create account',
            },
            {
                name: 'Delete Account',
                value: 'deleteAccount',
                description: 'Delete an account',
                action: 'Delete account',
            },
            {
                name: 'Get Account Activities',
                value: 'getAccountActivities',
                action: 'Get account activities',
            },
            {
                name: 'Get Account Detail',
                value: 'getAccountDetail',
                action: 'Get account detail',
            },
            {
                name: 'Get Account Service Segments',
                value: 'getAccountServiceSegments',
                description: 'Get segments of an account service',
                action: 'Get account service segments',
            },
            {
                name: 'Get Accounts by Service',
                value: 'getAccountsByService',
                description: 'Get list accounts of a service',
                action: 'Get accounts by service',
            },
            {
                name: 'Get All Account Services',
                value: 'getAllAccountServices',
                action: 'Get all account services',
            },
            {
                name: 'Update Account Basic',
                value: 'updateAccountBasic',
                description: 'Update account basic information',
                action: 'Update account basic',
            },
            {
                name: 'Update Account Followers',
                value: 'updateAccountFollowers',
                action: 'Update account followers',
            },
            {
                name: 'Update Account Owner',
                value: 'updateAccountOwner',
                action: 'Update account owner',
            },
        ],
        default: 'getAccountDetail',
    },
];
exports.accountFields = [
    // Common Account ID field for get/update/delete operations
    {
        displayName: 'Account ID',
        name: 'accountId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountDetail', 'getAccountActivities', 'updateAccountBasic', 'deleteAccount', 'updateAccountOwner', 'updateAccountFollowers'],
            },
        },
        default: 0,
        description: 'ID of the account',
    },
    // User ID field for operations requiring updater/viewer ID
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountActivities', 'updateAccountBasic', 'updateAccountOwner', 'updateAccountFollowers'],
            },
        },
        default: 0,
        description: 'ID of the user performing the action',
    },
    // Service ID for various operations
    {
        displayName: 'Service ID',
        name: 'serviceId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountServiceSegments', 'createAccount'],
            },
        },
        default: 0,
        description: 'Account service ID',
    },
    {
        displayName: 'Service ID',
        name: 'serviceId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 0,
        description: 'Filter by account service ID',
    },
    // Create Account - Required fields
    {
        displayName: 'Creator ID',
        name: 'creatorId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['createAccount'],
            },
        },
        default: 0,
        description: 'ID of the creator',
    },
    {
        displayName: 'Account Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['createAccount', 'updateAccountBasic'],
            },
        },
        default: '',
        description: 'Name of the account',
    },
    // Create/Update Account - Optional fields
    {
        displayName: 'Owner ID',
        name: 'ownerId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['createAccount'],
            },
        },
        default: 0,
        description: 'Owner ID (default = creator)',
    },
    {
        displayName: 'Owner ID',
        name: 'ownerId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['updateAccountOwner'],
            },
        },
        default: 0,
        description: 'New owner ID',
    },
    {
        displayName: 'Followers',
        name: 'followers',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['createAccount', 'updateAccountBasic'],
            },
        },
        default: '',
        description: 'Comma-separated usernames or IDs',
    },
    {
        displayName: 'Followers',
        name: 'followers',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['updateAccountFollowers'],
            },
        },
        default: '',
        description: 'Comma-separated usernames or IDs (overwrites existing)',
    },
    {
        displayName: 'Labels',
        name: 'labels',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['createAccount', 'updateAccountBasic'],
            },
        },
        default: '',
        description: 'Comma-separated label IDs',
    },
    // Get Accounts by Service - Optional filters
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 1,
        description: 'Page number',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
        },
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 50,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Since Stime',
        name: 'sinceStime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 0,
        description: 'Created time after timestamp',
    },
    {
        displayName: 'Since Etime',
        name: 'sinceEtime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 0,
        description: 'Created time before timestamp',
    },
    {
        displayName: 'Last Update Stime',
        name: 'lastUpdateStime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 0,
        description: 'Updated time after timestamp',
    },
    {
        displayName: 'Last Update Etime',
        name: 'lastUpdateEtime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: 0,
        description: 'Updated time before timestamp',
    },
    {
        displayName: 'Stage IDs',
        name: 'stageIds',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['account'],
                operation: ['getAccountsByService'],
            },
        },
        default: '',
        description: 'Comma-separated stage IDs',
    },
];
// ==================== CONTACT DESCRIPTIONS ====================
exports.contactOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['contact'],
            },
        },
        options: [
            {
                name: 'Archive Contact',
                value: 'archiveContact',
                description: 'Archive a contact',
                action: 'Archive contact',
            },
            {
                name: 'Create Contact',
                value: 'createContact',
                description: 'Create a new contact',
                action: 'Create contact',
            },
            {
                name: 'Get All Contact Services',
                value: 'getAllContactServices',
                action: 'Get all contact services',
            },
            {
                name: 'Get Contact Activities',
                value: 'getContactActivities',
                action: 'Get contact activities',
            },
            {
                name: 'Get Contact Detail',
                value: 'getContactDetail',
                action: 'Get contact detail',
            },
            {
                name: 'Get Contacts by Service',
                value: 'getContactsByService',
                description: 'Get list contacts of a service',
                action: 'Get contacts by service',
            },
            {
                name: 'Get Service Segments',
                value: 'getServiceSegments',
                description: 'Get segments of service',
                action: 'Get service segments',
            },
            {
                name: 'Unarchive Contact',
                value: 'unarchiveContact',
                description: 'Unarchive a contact',
                action: 'Unarchive contact',
            },
            {
                name: 'Update Contact Information',
                value: 'updateContactInformation',
                action: 'Update contact information',
            },
            {
                name: 'Update Contact Owner',
                value: 'updateContactOwner',
                action: 'Update contact owner',
            },
        ],
        default: 'getContactDetail',
    },
];
exports.contactFields = [
    // Common Contact ID for various operations
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactDetail', 'getContactActivities', 'updateContactInformation', 'archiveContact', 'unarchiveContact', 'updateContactOwner'],
            },
        },
        default: 0,
        description: 'ID of the contact',
    },
    // User ID for operations requiring updater/viewer ID
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactActivities', 'updateContactInformation', 'updateContactOwner'],
            },
        },
        default: 0,
        description: 'ID of the user performing the action',
    },
    // Service ID for various operations
    {
        displayName: 'Service ID',
        name: 'serviceId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getServiceSegments', 'createContact', 'getContactsByService'],
            },
        },
        default: 0,
        description: 'Contact service ID',
    },
    // Create Contact - Required fields
    {
        displayName: 'Creator ID',
        name: 'creatorId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
        default: 0,
        description: 'ID of the creator',
    },
    {
        displayName: 'First Name',
        name: 'firstName',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'First name of the contact',
    },
    // Create/Update Contact - Optional fields
    {
        displayName: 'Stage ID',
        name: 'stageId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
        default: 0,
        description: 'Contact stage ID',
    },
    {
        displayName: 'Last Name',
        name: 'lastName',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Last name of the contact',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        placeholder: 'name@email.com',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Contact email',
    },
    {
        displayName: 'Phone',
        name: 'phone',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Contact phone',
    },
    {
        displayName: 'Prefix',
        name: 'prefix',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Name prefix (Mr., Ms., Dr., etc.)',
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Job title',
    },
    {
        displayName: 'Account ID',
        name: 'accountId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: 0,
        description: 'Primary account ID',
    },
    {
        displayName: 'Owner ID',
        name: 'ownerId',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
        default: 0,
        description: 'Contact owner ID',
    },
    {
        displayName: 'Owner ID',
        name: 'ownerId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContactOwner'],
            },
        },
        default: 0,
        description: 'New owner ID',
    },
    {
        displayName: 'Followers',
        name: 'followers',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Comma-separated usernames or IDs',
    },
    {
        displayName: 'Labels',
        name: 'labels',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact', 'updateContactInformation'],
            },
        },
        default: '',
        description: 'Comma-separated label IDs',
    },
    // Get Contacts by Service - Optional filters
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: 1,
        description: 'Page number',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
        },
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: 50,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Since Stime',
        name: 'sinceStime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: 0,
        description: 'Created time after timestamp',
    },
    {
        displayName: 'Since Etime',
        name: 'sinceEtime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: 0,
        description: 'Created time before timestamp',
    },
    {
        displayName: 'Last Update Stime',
        name: 'lastUpdateStime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: 0,
        description: 'Updated time after timestamp',
    },
    {
        displayName: 'Last Update Etime',
        name: 'lastUpdateEtime',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: 0,
        description: 'Updated time before timestamp',
    },
    {
        displayName: 'Stage IDs',
        name: 'stageIds',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactsByService'],
            },
        },
        default: '',
        description: 'Comma-separated stage IDs',
    },
];
// ==================== FEED DESCRIPTIONS ====================
exports.feedOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['feed'],
            },
        },
        options: [
            {
                name: 'Create Note',
                value: 'createNote',
                description: 'Create a new note',
                action: 'Create note',
            },
            {
                name: 'Log Past Call',
                value: 'logPastCall',
                description: 'Log a past call',
                action: 'Log past call',
            },
            {
                name: 'Log Past Meeting',
                value: 'logPastMeeting',
                description: 'Log a past meeting',
                action: 'Log past meeting',
            },
            {
                name: 'Log Quick Activity',
                value: 'logQuickActivity',
                description: 'Log a activity quickly',
                action: 'Log quick activity',
            },
        ],
        default: 'createNote',
    },
];
exports.feedFields = [
    // Common fields for all feed operations
    {
        displayName: 'Username',
        name: 'username',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['createNote', 'logQuickActivity', 'logPastCall', 'logPastMeeting'],
            },
        },
        default: '',
        description: 'Username of the person creating the feed item',
    },
    {
        displayName: 'Source Type',
        name: 'sourceType',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['createNote', 'logQuickActivity', 'logPastCall', 'logPastMeeting'],
            },
        },
        options: [
            {
                name: 'Deal',
                value: 'deal',
            },
            {
                name: 'Account',
                value: 'account',
            },
            {
                name: 'Contact',
                value: 'contact',
            },
        ],
        default: 'deal',
        description: 'Type of the source object',
    },
    {
        displayName: 'Source ID',
        name: 'sourceId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['createNote', 'logQuickActivity', 'logPastCall', 'logPastMeeting'],
            },
        },
        default: 0,
        description: 'ID of the source object (deal, account, or contact)',
    },
    // Create Note fields
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['createNote'],
            },
        },
        default: '',
        description: 'Content of the note',
    },
    // Log Quick Activity fields
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logQuickActivity'],
            },
        },
        default: '',
        description: 'Content of the activity',
    },
    {
        displayName: 'Activity Time',
        name: 'stime',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logQuickActivity'],
            },
        },
        default: '',
        description: 'Time of the activity (format: YYYY-MM-DD HH:MM:SS)',
    },
    {
        displayName: 'Activity Name',
        name: 'name',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logQuickActivity'],
            },
        },
        default: '',
        description: 'Name or title of the activity',
    },
    // Log Past Call fields
    {
        displayName: 'Call Time',
        name: 'stime',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastCall'],
            },
        },
        default: '',
        description: 'Time of the call (format: YYYY-MM-DD HH:MM:SS)',
    },
    {
        displayName: 'Outcome',
        name: 'outcome',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastCall'],
            },
        },
        options: [
            {
                name: 'Connected',
                value: 'connected',
            },
            {
                name: 'Busy',
                value: 'busy',
            },
            {
                name: 'No Answer',
                value: 'no_answer',
            },
            {
                name: 'Wrong Number',
                value: 'wrong_number',
            },
        ],
        default: 'connected',
        description: 'Outcome of the call',
    },
    {
        displayName: 'Direction',
        name: 'direction',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastCall'],
            },
        },
        options: [
            {
                name: 'Incoming',
                value: 'in',
            },
            {
                name: 'Outgoing',
                value: 'out',
            },
        ],
        default: 'out',
        description: 'Direction of the call',
    },
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastCall'],
            },
        },
        default: '',
        description: 'Notes about the call',
    },
    // Log Past Meeting fields
    {
        displayName: 'Meeting Time',
        name: 'stime',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastMeeting'],
            },
        },
        default: '',
        description: 'Time of the meeting (format: YYYY-MM-DD HH:MM:SS)',
    },
    {
        displayName: 'Outcome',
        name: 'outcome',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastMeeting'],
            },
        },
        options: [
            {
                name: 'Completed',
                value: 'completed',
            },
            {
                name: 'Cancelled',
                value: 'cancel',
            },
            {
                name: 'No Show',
                value: 'no_show',
            },
        ],
        default: 'completed',
        description: 'Outcome of the meeting',
    },
    {
        displayName: 'Meeting Type',
        name: 'meetingType',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastMeeting'],
            },
        },
        options: [
            {
                name: 'Online',
                value: 'online',
            },
            {
                name: 'Offline',
                value: 'offline',
            },
            {
                name: 'Other',
                value: 'other',
            },
        ],
        default: 'offline',
        description: 'Type of meeting',
    },
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['feed'],
                operation: ['logPastMeeting'],
            },
        },
        default: '',
        description: 'Notes about the meeting',
    },
];
// ==================== LEAD DESCRIPTIONS ====================
exports.leadOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['lead'],
            },
        },
        options: [
            {
                name: 'Feed',
                value: 'feed',
                action: 'Lead feed operations',
            },
            {
                name: 'Get Lead Detail',
                value: 'getLeadDetail',
                action: 'Get lead detail',
            },
            {
                name: 'Get Lead Services',
                value: 'getLeadServices',
                action: 'Get lead services',
            },
            {
                name: 'Get Leads by Service',
                value: 'getLeadsByService',
                action: 'Get leads by service',
            },
            {
                name: 'Search Leads by Phone Number',
                value: 'searchLeadsByPhoneNumber',
                action: 'Search leads by phone number',
            },
        ],
        default: 'getLeadsByService',
    },
    {
        displayName: 'Feed Operation',
        name: 'feedOperation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['feed'],
            },
        },
        options: [
            {
                name: 'Create Lead Call Log',
                value: 'createLeadCallLog',
                action: 'Create lead call log',
            },
            {
                name: 'Create Lead Log',
                value: 'createLeadLog',
                action: 'Create lead log',
            },
            {
                name: 'Create Lead Meeting Log',
                value: 'createLeadMeetingLog',
                action: 'Create lead meeting log',
            },
            {
                name: 'Create Lead Note',
                value: 'createLeadNote',
                action: 'Create lead note',
            },
            {
                name: 'Get Lead Feeds',
                value: 'getLeadFeeds',
                action: 'Get lead feeds',
            },
        ],
        default: 'createLeadNote',
    },
];
exports.leadFields = [
    // Get Leads by Service
    {
        displayName: 'Service ID',
        name: 'serviceId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getLeadsByService'],
            },
        },
        default: 0,
        description: 'ID of the service',
    },
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getLeadsByService'],
            },
        },
        default: 1,
        description: 'Page number for pagination',
    },
    {
        displayName: 'Start Time',
        name: 'startTime',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getLeadsByService'],
            },
        },
        default: '',
        description: 'Timestamp filter start (Unix timestamp)',
    },
    {
        displayName: 'End Time',
        name: 'endTime',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getLeadsByService'],
            },
        },
        default: '',
        description: 'Timestamp filter end (Unix timestamp)',
    },
    {
        displayName: 'Stage ID',
        name: 'stageId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getLeadsByService'],
            },
        },
        default: '',
        description: 'Filter by stage ID',
    },
    // Get Lead Detail
    {
        displayName: 'Lead ID',
        name: 'leadId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['getLeadDetail'],
            },
        },
        default: 0,
        description: 'ID of the lead',
    },
    // Search Leads by Phone Number
    {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                operation: ['searchLeadsByPhoneNumber'],
            },
        },
        default: '',
        description: 'Phone number to search',
    },
    // Feed - Common fields
    {
        displayName: 'Lead ID',
        name: 'leadId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadNote', 'createLeadLog', 'createLeadCallLog', 'createLeadMeetingLog', 'getLeadFeeds'],
            },
        },
        default: 0,
        description: 'ID of the lead',
    },
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'number',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadNote', 'createLeadLog', 'createLeadCallLog', 'createLeadMeetingLog'],
            },
        },
        default: 0,
        description: 'Creator user ID',
    },
    // Feed - Create Lead Note
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadNote'],
            },
        },
        default: '',
        description: 'Note content',
    },
    {
        displayName: 'Color',
        name: 'color',
        type: 'color',
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadNote'],
            },
        },
        default: '',
        description: 'Note color (hex code)',
    },
    // Feed - Create Lead Log
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadLog'],
            },
        },
        default: '',
        description: 'Log title',
    },
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadLog', 'createLeadCallLog', 'createLeadMeetingLog'],
            },
        },
        default: '',
        description: 'Log content',
    },
    {
        displayName: 'Time',
        name: 'stime',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadLog', 'createLeadCallLog', 'createLeadMeetingLog'],
            },
        },
        default: '',
        description: 'Time in format: HH:MM DD/MM/YYYY (e.g. 09:15 10/02/2024)',
    },
    // Feed - Create Lead Call Log
    {
        displayName: 'Direction',
        name: 'direction',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadCallLog'],
            },
        },
        options: [
            {
                name: 'Inbound',
                value: 'in',
            },
            {
                name: 'Outbound',
                value: 'out',
            },
        ],
        default: 'out',
        description: 'Call direction',
    },
    {
        displayName: 'Outcome',
        name: 'outcome',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadCallLog'],
            },
        },
        options: [
            {
                name: 'Busy',
                value: 'busy',
            },
            {
                name: 'Connected',
                value: 'connected',
            },
            {
                name: 'No Answer',
                value: 'no_answer',
            },
            {
                name: 'Wrong Number',
                value: 'wrong_number',
            },
        ],
        default: 'connected',
        description: 'Call outcome',
    },
    // Feed - Create Lead Meeting Log
    {
        displayName: 'Meeting Type',
        name: 'meetingType',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadMeetingLog'],
            },
        },
        options: [
            {
                name: 'Offline',
                value: 'offline',
            },
            {
                name: 'Online',
                value: 'online',
            },
            {
                name: 'Other',
                value: 'other',
            },
        ],
        default: 'online',
        description: 'Type of meeting',
    },
    {
        displayName: 'Outcome',
        name: 'outcome',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['lead'],
                feedOperation: ['createLeadMeetingLog'],
            },
        },
        options: [
            {
                name: 'Cancel',
                value: 'cancel',
            },
            {
                name: 'Completed',
                value: 'completed',
            },
            {
                name: 'No Show',
                value: 'no_show',
            },
        ],
        default: 'completed',
        description: 'Meeting outcome',
    },
];
//# sourceMappingURL=descriptions.js.map
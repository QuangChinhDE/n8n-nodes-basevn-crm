"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCrmDealApi = void 0;
class BaseCrmDealApi {
    constructor() {
        this.name = 'baseCrmDealApi';
        this.displayName = 'BaseVN CRM Deal API';
        this.icon = 'file:../icons/crm.svg';
        this.documentationUrl = 'https://documenter.getpostman.com/view/1345096/SztA68Az?version=latest';
        this.properties = [
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: 'basevn.tech',
                placeholder: 'example.basevn.com',
                description: 'Your BaseVN domain',
            },
            {
                displayName: 'Access Token (Deal Module)',
                name: 'accessToken',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'API access token for Deal module (includes Pipeline, Deal, Account, Contact, Feed)',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'Your API password',
            },
        ];
        this.test = {
            request: {
                baseURL: 'https://apis.{{$credentials.domain}}',
                url: '/sales/v1/pipeline',
                method: 'GET',
                qs: {
                    access_token: '={{$credentials.accessToken}}',
                    password: '={{$credentials.password}}',
                },
            },
        };
    }
}
exports.BaseCrmDealApi = BaseCrmDealApi;
//# sourceMappingURL=BaseCrmDealApi.credentials.js.map
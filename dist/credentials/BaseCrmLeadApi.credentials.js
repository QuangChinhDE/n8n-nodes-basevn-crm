"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCrmLeadApi = void 0;
class BaseCrmLeadApi {
    constructor() {
        this.name = 'baseCrmLeadApi';
        this.displayName = 'BaseVN CRM Lead API';
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
                displayName: 'Access Token (Lead Module)',
                name: 'accessToken',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'API access token for Lead module',
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
                url: '/leads/service',
                method: 'GET',
                qs: {
                    access_token: '={{$credentials.accessToken}}',
                    password: '={{$credentials.password}}',
                },
            },
        };
    }
}
exports.BaseCrmLeadApi = BaseCrmLeadApi;
//# sourceMappingURL=BaseCrmLeadApi.credentials.js.map
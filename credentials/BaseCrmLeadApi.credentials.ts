import type {
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BaseCrmLeadApi implements ICredentialType {
	name = 'baseCrmLeadApi';

	displayName = 'BaseVN CRM Lead API';

	icon: Icon = 'file:../icons/crm.svg';

	documentationUrl = 'https://documenter.getpostman.com/view/1345096/SztA68Az?version=latest';

	properties: INodeProperties[] = [
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

	test: ICredentialTestRequest = {
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

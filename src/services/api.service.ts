import type {AxiosInstance, AxiosResponse} from 'axios';

class ApiService {
    protected httpClient: AxiosInstance = {} as AxiosInstance;

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
    }

    public async get(url: string, config?: any): Promise<AxiosResponse<any, any>> {
        return this.httpClient.get(url, config);
    }
}

export default ApiService;

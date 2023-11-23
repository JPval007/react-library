import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    
}

const AxiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '977aa7f81b1c4f009f3a8f3c6c5cf212'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig)=> {
        return AxiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient;
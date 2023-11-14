import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '977aa7f81b1c4f009f3a8f3c6c5cf212'
    }
})
import axios from 'axios';

const BASE_URL =
    import.meta.env.VITE_API_URL;

const PROXY_URL =
    import.meta.env.VITE_PROXY_URL;



export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export const axiosPrivateTwo = axios.create({
    baseURL: PROXY_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true

});
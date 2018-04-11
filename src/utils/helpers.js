import axios from 'axios';

export const ROOT_URL = "http://127.0.0.1:8000/api";

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export let instance = axios.create({
    baseURL: ROOT_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

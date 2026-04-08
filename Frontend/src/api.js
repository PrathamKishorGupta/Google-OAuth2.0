import axios from 'axios';

const api = axios.create({
    baseURL : 'https://google-oauth2-0-ba.onrender.com/auth'
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);

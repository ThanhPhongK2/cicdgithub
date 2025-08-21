import axios from 'axios';

const API = axios.create({ baseURL: 'http://13.231.252.154:5000' });

export const logIn = (formData) => API.post('/auth/login', formData); 

export const signUp = (formData) => API.post('/auth/register', formData);
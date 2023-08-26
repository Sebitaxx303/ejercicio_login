import axios from './axios'

// const API = 'http://localhost:3001/api';

export const RegisterRequest = user => axios.post(`/register`, user);

export const LoginRequest = user => axios.post(`/login`, user);

export const VerifyTokenRequest = () => axios.get(`/verify`)
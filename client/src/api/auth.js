import axios from 'axios'

const API = 'http://localhost:3001/api';
export const RegisterRequest = user => axios.post(`${API}/register`, user);
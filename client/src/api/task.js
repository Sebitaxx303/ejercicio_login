import axios from './axios';

export const getTasksRequest = () => axios.get(`/task`)
export const getTaskRequest = (id) => axios.get(`/task/${id}`)
export const createTaksRequest = (task) => axios.post(`/task`,task)
export const updateTaksRequest = (task) => axios.put(`/task/${task.id}`, task);
export const deleteTaksRequest = (id) => axios.delete(`/task/${id}`)
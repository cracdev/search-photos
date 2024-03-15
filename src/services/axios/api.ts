import axios, { AxiosInstance } from 'axios';
import { API_URL } from '$constants/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

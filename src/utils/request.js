import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default instance;

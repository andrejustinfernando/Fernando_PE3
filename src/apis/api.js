import axios from 'axios';

const api = axios.create({
    baseURL: 'https://favqs.com',
  });
  export { api };
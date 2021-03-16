import axios from 'axios';

export const palceHolderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
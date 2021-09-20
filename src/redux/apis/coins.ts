import axios from 'axios';

const API = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a323c94364mshcb32f06922f4354p161a8ejsnb5302562c6b3'
  }
});

export const fetchCoinsApi = (limit: number) => API.get(`/coins?limit=${limit}`);

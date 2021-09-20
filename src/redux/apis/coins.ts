import axios from 'axios';

const API = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
  }
});

export const fetchCoinsApi = (limit: number) => API.get(`/coins?limit=${limit}`);

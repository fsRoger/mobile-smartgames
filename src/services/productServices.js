import axios from 'axios';

const baseURL = "https://api-lojagames.up.railway.app";


export function getAllGames() {
  const response = axios.get(`${baseURL}/product`);
  return response;
}

export async function getProductById(id) {
  const response = await axios.get(`${baseURL}/product/${id}`);
  return response;

}


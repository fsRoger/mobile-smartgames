import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // ou 'http://localhost:3000' para iOS
});

export function getAllGames() {
  return api.get('/product');
  console.log("prodihg", product)
}

export function searchProduct(title) {
  return api.get(`/product/search?title=${title}`);
}

export async function getProductById(id) {
  const response = await api.get(`/product/${id}`);
  return response;
}

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.111:3000/',
});

export function getAllGames() {
  return api.get('/product')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Erro ao obter os dados:', error);
      throw error;
    });
}

//export function searchProduct(title) {
//  return api.get(`/product/search?title=${title}`);
//}

//export async function getProductById(id) {
//  const response = await api.get(`/product/${id}`);
//  return response;
//}

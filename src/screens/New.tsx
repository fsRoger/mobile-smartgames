import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getProductById } from '../services/productServices';

interface Product {
  _id: string;
  nome: string;
  linkImagem: string;
  descricao: string;
  preco: number;
  plataformas?: string[];
  lojas: string[];
}

export default function New() {
  const [product, setProduct] = useState<Product | null>(null);
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const id = route?.params?.id; // Pegando o ID da rota

  async function fetchProduct() {
    try {
      console.log("ID recebido:", id); // Verificando o ID recebido

      const response = await getProductById(id); // Buscando o produto pelo ID
      setProduct(response.data.product);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(product.preco);

  return (
    <>
      <div>
        <div>
          <h2>{product.nome}</h2>
          <img src={product.linkImagem} alt={product.nome} />
          <div>
            <p>Preço: {formattedPrice}</p>
            <p>Plataformas: {product.plataformas ? product.plataformas.join(", ") : "N/A"}</p>
          </div>
        </div>
        <div>
          <p>{product.descricao}</p>
        </div>
      </div>
      <div>
        <h3>Compre online ou nas seguintes lojas:</h3>
        <p>{product.lojas.join(", ")}</p>
      </div>
    </>
  );
}

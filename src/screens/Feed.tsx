import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card } from '../components/Card';
import { getAllGames } from '../services/productServices';

export default function Feed({ navigation }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  async function fetchAllGames() {
    try {
      const response = await getAllGames();
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar os jogos:', error);
    }
  }

  useEffect(() => {
    fetchAllGames();
  }, []);

  const filteredProducts = products.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('/new', { id: item._id })}
          >
            <Card
              nome={item.nome}
              linkImagem={item.linkImagem}

              preco={item.preco}
              plataformas={item.plataformas}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

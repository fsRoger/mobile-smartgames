import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, Image } from 'react-native';
import axios from 'axios';
import { getAllGames } from '../../services/productServices';



export default function Card() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await getAllGames();
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  return (
    <View >
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <View >
              <Text>{item.nome}</Text>
              <Image source={{ uri: item.linkImagem }} style={{ width: 100, height: 100 }}></Image>
              <Text>{item.descricao}</Text>
              <Text>{item.preco}</Text>
              <Text>{item.lojas}</Text>


            </View>
          )}
        />
      )}
      <StatusBar />
    </View>
  );
}

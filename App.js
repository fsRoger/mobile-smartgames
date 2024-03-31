// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <>
//       <View >
//         <Text>poioi</Text>
//         <StatusBar style="auto" />
//       </View>
//     </>

//   );
// }

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import Card from '../../components/Card';
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar'; // Certifique-se de ter um componente Navbar adequado para React Native
import styled from 'styled-components-native';
//import { useNavigation } from '@react-navigation/native';

const StyledView = styled.View`
  flex: 1;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const navigation = useNavigation();

  async function findAllGames() {
    const productResponse = await getAllGames();
    setProduct(productResponse.data);

    console.log(productResponse.data);
  }

  useEffect(() => {
    findAllGames();
  }, []);

  const filteredProducts = products.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StyledView>
      {/* <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
          //onPress={() => navigation.navigate('Details', { id: item._id })}
          >
            <Card
              nome={item.nome}
              linkImagem={item.linkImagem}
              descricao={item.descricao}
              preco={item.preco}
              plataformas={item.plataformas}
            />
          </TouchableOpacity>
        )}
      />
      {/* <Footer /> */}
    </StyledView>
  );
};

export default Home;

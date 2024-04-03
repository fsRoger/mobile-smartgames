// import React, { useState, useEffect } from 'react';
// import { View, Text, StatusBar, FlatList, Image } from 'react-native';
// import axios from 'axios';
// import { getAllGames } from '../../services/productServices';



// export default function Card() {1
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchGames() {
//       try {
//         const response = await getAllGames();
//         setGames(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Erro ao buscar os jogos:', error);
//         setLoading(false);
//       }
//     }

//     fetchGames();
//   }, []);

//   return (
//     <View >
//       {loading ? (
//         <Text>Carregando...</Text>
//       ) : (
//         <FlatList
//           data={games}
//           keyExtractor={(item) => item._id.toString()}
//           renderItem={({ item }) => (
//             <View >
//               <Text>{item.nome}</Text>
//               <Image source={{ uri: item.linkImagem }} style={{ width: 100, height: 100 }}></Image>
//               <Text>{item.descricao}</Text>
//               <Text>{item.preco}</Text>
//               <Text>{item.lojas}</Text>


//             </View>
//           )}
//         />
//       )}
//       <StatusBar />
//     </View>
//   );
// }
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function Card({ linkImagem, nome, preco, plataformas }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(preco);

  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: linkImagem }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{nome}</Text>
        <View style={styles.platformsContainer}>
          {plataformas.map((plataforma, index) => (
            <Text key={index} style={styles.platform}>
              {plataforma}
            </Text>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>{formattedPrice} BRL</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Compre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
  },
  image: {
    width: 380,
    height: 200,
    borderRadius: 5,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  platformsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  platform: {
    marginRight: 10,
    fontStyle: 'italic',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components-native'; // Certifique-se de ter instalado e configurado corretamente styled-components

const StyledCard = styled.View`
  /* Estilos CSS que você pode converter para estilos em React Native conforme necessário */
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

const Card = ({ nome, linkImagem, descricao, preco, plataformas }) => {
  return (
    <StyledCard>
      {linkImagem && (
        <Image
          style={{ width: 380, height: 200 }}
          source={{ uri: linkImagem }}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.name}>{nome}</Text>
        <View style={styles.platformsContainer}>
          {plataformas.map((plataforma, index) => (
            <Text key={index} style={styles.plataformas}>
              {plataforma}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.price}>R$ {preco} BRL</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          {/* Ícone de coração pode ser adicionado aqui */}
          <Text style={styles.favoriteButtonText}>Favorito</Text>
        </TouchableOpacity>
      </View>
    </StyledCard>
  );
};

const styles = {
  content: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  platformsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  plataformas: {
    marginRight: 10,
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  favoriteButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  favoriteButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
};

export default Card;

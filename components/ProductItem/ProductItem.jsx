import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
  
    return (
      <View style={styles.productItem}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceDistanceContainer}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.distance}>{item.distance}</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Text>Quantity: {quantity}</Text>
          {/* Add buttons or controls to adjust quantity here */}
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    productItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    imageContainer: {
      width: 30,
      height: 20,
      marginRight: 10,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    detailsContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    priceDistanceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    price: {
      color: '#007bff',
    },
    distance: {
      color: '#999',
    },
    quantityContainer: {
      alignItems: 'center',
    },
  });
  
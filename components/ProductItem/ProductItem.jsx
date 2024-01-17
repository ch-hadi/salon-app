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
            <Text style={styles.distance}>20km</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Text>Quantity: 1</Text>
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
      width: 60,
      height: 60,
      marginRight: 10,
      paddingVertical:6,
      paddingHorizontal:5,
      backgroundColor:'pink',
      borderRadius:15
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius:15
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
  export default ProductItem;
  
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ProductItem from '../ProductItem/ProductItem';

const CFlatList = (props) => {
    return (
        <FlatList
          data={props.data}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      );
}

export default CFlatList

const styles = StyleSheet.create({})
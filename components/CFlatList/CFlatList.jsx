import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const CFlatList = (props) => {
    return (
        <FlatList
          data={props.products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      );
}

export default CFlatList

const styles = StyleSheet.create({})
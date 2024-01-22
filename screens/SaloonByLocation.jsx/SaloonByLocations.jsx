import { StyleSheet, Text, View,Platform  } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors ,Appbar } from 'react-native-paper';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const SaloonByLocations = () => {
  return (
    <View>
      <Text>SaloonByLocations</Text>
      <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
    </View>
  )
}

export default SaloonByLocations

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'darkred' }}>
    {/* <StatusBar barStyle="dark-content" />  */}
    <View style={styles.main}>
      <View style={styles.box1}>
       <View style={styles.bg_img}><Text>Hadi</Text></View>
       <View style={styles.content_view}>
        <Text>Ammar</Text>
       </View>
      </View>
      <View style={styles.box2}>
        <Text>Ammar</Text>
      </View>
    </View>
  </SafeAreaView>
   
  )
}

export default Home

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    box1:{
      flex:1.5,
      width:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    box2:{
      flex:1,
      backgroundColor:'yellow',
      width:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    bg_img:{
      flex:2,
      backgroundColor:'pink',
      width:'100%'
    },
    content_view:{
      flex:1,
      backgroundColor:'black',
      width:'100%'
    }
})
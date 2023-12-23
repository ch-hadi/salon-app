import { StyleSheet, Text, View,SafeAreaView,StatusBar,ImageBackground } from 'react-native'
import React from 'react'
import image from './../../assets/images/girl-cutting.jpg';
import { Ionicons } from '@expo/vector-icons';
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'darkred' }}>
    {/* <StatusBar barStyle="dark-content" />  */}
    <View style={styles.main}>
      <View style={styles.box1}>
          <View style={styles.bg_img}>
            <ImageBackground style={styles.imageStyle} source={image}>
              <View style={styles.bg_image_content}>
                <View style={styles.headerIcons}>
                  <Ionicons name='arrow-back' size='30px' color={'white'} />
                  <Ionicons name='search-outline' size='30px' color={'white'} />
                </View>
                 <View><Text style={{color:'#fff'}}>Adi</Text></View>
              </View>
            </ImageBackground>
       </View>
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
      flex:10,
      backgroundColor:'pink',
      width:'100%'
    },
    content_view:{
      flex:1,
      backgroundColor:'black',
      width:'100%'
  },
  imageStyle: {
    width: '100%',
    resizeMode: 'center',
    zIndex: 200,
    height:450
  },
  bg_image_content:{
    flex:1,
    backgroundColor: '#000000a0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 70,
    paddingTop: 30,
    alignItems:'center'
  },
  headerIcons: {
    color: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
   paddingHorizontal:30
  }
})
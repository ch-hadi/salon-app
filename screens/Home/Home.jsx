import { StyleSheet, Text, View,SafeAreaView,StatusBar,ImageBackground } from 'react-native'
import React from 'react'
import image from './../../assets/images/girl-cutting.jpg';
import { Ionicons } from '@expo/vector-icons';
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1,}}>
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
                <View style={styles.bannerContent}>
                  <Text style={{color:'#fff'}}>FOR WOMEN</Text>
                  <View style={{width:"100%",display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <View style={{ width: '70%'}}>
                      <Text style={{fontSize:22,fontWeight:'bold' ,color: '#fff',paddingVertical:15}}>STYLE LOUNGE SALON</Text>
                      <View style={styles.locationInfo}>
                        <Text style={styles.TextStyle}>Ranchview</Text>
                        <Text style={[{marginHorizontal:10,fontSize:5,alignItems:"center"},styles.TextStyle]}>❁</Text>
                        <Text style={[styles.TextStyle,{marginRight:5}]}>3.8 Kms</Text>
                        <Text style={styles.TextStyle}>$$$</Text>
                      </View>
                    </View>
                     <View style={{ width: '30%',alignItems:'center' }}>
                        <Text> <Ionicons name='heart-outline' size='30px' color={'white'} /></Text>
                        <Text style={styles.TextStyle}>Favourite</Text>
                      </View>
                  </View>
                 </View>
              </View>
            </ImageBackground>
          </View>
       <View style={styles.content_view}>
            <View style={styles.directionsDetail}>
              <View style={styles.icon_text}>
                <Ionicons name='call-outline' size='30px' color={'white'} />
                <Text style={styles.inner_text}>Call</Text> 
              </View>
              <View style={styles.icon_text}>
                 <Ionicons name='location-outline' size='30px' color={'white'} />
              <Text style={styles.inner_text}>Directions</Text>
              </View>
              <View style={styles.icon_text}>
                <Ionicons name='share-outline' size='30px' color={'white'} />
                <Text style={styles.inner_text}> Share</Text>
              </View>
            </View>
            <View style={styles.reviews}>
              <View style={{
                alignItems: 'center', borderColor: 'white',
                borderBottomWidth: 1, borderTopWidth: 1,
                borderLeftWidth: 1, borderRightWidth: 1, borderRadius: 10,
              display:'flex',flexDirection:'row'
              }}>
                <Ionicons name='star-outline' size='20px' color={'white'} />
                <Text style={styles.TextStyle}>4.1</Text>
              </View>
              <Text>5k + ratings</Text>
            </View>
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
      flex:1,
      width: '100%',
      
    },
    content_view:{
      flex:0.3,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor:'#000'
  },
  imageStyle: {
    width: '100%',
    resizeMode: 'stretch',
    height: 330,
    
  },
  bg_image_content:{
    flex:1,
    backgroundColor: '#000000a0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingTop: 30,
    // alignItems:'center'
  },
  headerIcons: { 
    color: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal:15
  },
  bannerContent: {
    paddingHorizontal:15
  },
  locationInfo: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    alignItems:'center'
  },
  TextStyle: {
    color: "#fff",
    fontSize:17
  },
  directionsDetail: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:15
  },
  reviews: {
    width: '30%',
    // backgroundColor:'yellow'
  },
  icon_text: {
    fontSize: 12,
    fontWeight: "bold",
    alignItems:'center',marginRight:'10 %'
  },
  inner_text: {
    paddingVertical: 5,
    color:'#fff'
  }
})
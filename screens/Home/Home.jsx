import { StyleSheet, Text, View,SafeAreaView,StatusBar,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import image from './../../assets/images/girl-cutting.jpg';
import { Ionicons } from '@expo/vector-icons';
import CSectionList from '../../components/CSectionList/CSectionList';
import CFlatList from '../../components/CFlatList/CFlatList';
const Home = () => {

  const [active, setActive] = useState('1');

  useEffect(()=>{
    setActive(data[0])
  },[])
  return (
    <View style={styles.main}>
      <SafeAreaView/>
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
         <View style={{display:'flex',flex:0.53,flexDirection:'column',width:'100%'}}>
         <View style={styles.content_view}>
             <View style={styles.directionsDetail}>
            <View style={styles.icon_text}>
              <Ionicons name='call-outline' size='25px' color={'#000'} />
              <Text style={styles.inner_text}>Call</Text> 
            </View>
            <View style={styles.icon_text}>
               <Ionicons name='location-outline' size='25px' color={'#000'} />
            <Text style={styles.inner_text}>Directions</Text>
            </View>
            <View style={styles.icon_text}>
              <Ionicons name='share-outline' size='25px' color={'#000'} />
              <Text style={styles.inner_text}> Share</Text>
            </View>
          </View>
          <View style={styles.reviews}>
            <View style={{
              alignItems: 'center', borderColor: 'blue',
              borderBottomWidth: 1, borderTopWidth: 1,
              borderLeftWidth: 1, borderRightWidth: 1, borderRadius: 10,
              display: 'flex', flexDirection: 'row',
              width: 70,
              height: 35,
              justifyContent: 'space-evenly',
             
            }}>
              <Ionicons name='star-outline' size='15px' color={'blue'} />
              <Text style={{color:'blue',fontWeight:"bold"}}>4.1</Text>
            </View>
            <Text style={{ marginTop: 5, color: 'blue' }}>5k + ratings</Text>
          </View>
          </View>
          <View style={styles.offers}>
            <View style={styles.offer_1}>
              <View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                   <Ionicons name='flower-outline' size='15px' color={'blue'} />
                <Text style={{ fontWeight: 'bold' }}> 50% Off</Text>
               </View>
              <Text>Use Code FREE50</Text>
              </View>
            </View>
            <View style={styles.offer_2}>
               <View>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                   <Ionicons name='flower-outline' size='15px' color={'blue'} />
                <Text style={{ fontWeight: 'bold' }}> 60% Off Debit Card</Text>
               </View>
              <Text style={{ paddingTop:5 }}>No Coupon Required</Text>
              </View>
            </View>
          </View>
     </View>
    </View>
    <View style={styles.box2}>
      <View style={{height:50,width:'100%',justifyContent:'center'}}>
      <CSectionList data={data} activeId={active} setActiveId={setActive} color='#F2EFFF' bgColor='#6440FE'/>
      </View>
      <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:15}}>{active.name} (5)</Text>
      <View>
        <CFlatList data={products}/>
      </View>
    </View>
  </View>
   
  )
}

export default Home

const styles = StyleSheet.create({
    main:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        // height:'100%',
        flex:1
    },
    box1:{
      flex:1.8,
      width:'100%',
      // justifyContent:'center',
      // alignItems: 'center',
      // backgroundColor:'green'
    },
    box2:{
      flex:1,
      // backgroundColor:'yellow',
      width:'100%',
      // paddingHorizontal:15
      // justifyContent:'center',
      // alignItems:'center',
    
    },
    bg_img:{
      flex:1,
      width: '100%',
    },
    content_view:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      paddingVertical:15
  },
  imageStyle: {
    width: '100%',
    resizeMode: 'cover',
    height: 300,
    
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
    alignItems: 'center',
  },
  icon_text: {
    fontSize: 12,
    fontWeight: "bold",
    alignItems: 'center',
    marginRight: '10%',
    
  },
  inner_text: {
    paddingVertical: 5,
    color:'#000'
  },
  offers: {
    width: '100%',
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:10
    
  },
  offer_1: {
    width: '35%',
    alignItems: 'center',
    borderColor: 'blue',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 58,
    justifyContent:'center'
  },
  offer_2: {
    width: '60%',
    alignItems: 'center',
    borderColor: 'blue',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 58,
    justifyContent:'center',
   
  }
})
let data = [
  {name:'Recommended',id:1,data:[]},
  {name:'Packages',id:2,data:[]},
  {name:'Face Care',id:3,data:[]},
  {name:'Hair Cutting',id:4,data:[]},
  {name:'Nail Cutting',id:5,data:[]},
]
let products = [
  {
     "id":3,
     "title":"Mens ",
     "price":55.99,
     "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
     "category":"men's clothing",
     "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     "rating":{
        "rate":4.7,
        "count":500
     }
  },
  {
     "id":4,
     "title":"Mens Casual",
     "price":15.99,
     "description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
     "category":"men's clothing",
     "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
     "rating":{
        "rate":2.1,
        "count":430
     }
  },
  {
     "id":18,
     "title":"MBJ Women's ",
     "price":9.85,
     "description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
     "category":"women's clothing",
     "image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
     "rating":{
        "rate":4.7,
        "count":130
     }
  },
  {
     "id":19,
     "title":"Opna Women's",
     "price":7.95,
     "description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
     "category":"women's clothing",
     "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
     "rating":{
        "rate":4.5,
        "count":146
     }
  },
  {
     "id":20,
     "title":"DANVOUY Womens",
     "price":12.99,
     "description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
     "category":"women's clothing",
     "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
     "rating":{
        "rate":3.6,
        "count":145
     }
  }
]
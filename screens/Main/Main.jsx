import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../../components/Tabs/BottomTabNavigator'
import Home from '../Home/Home';
import { PaperProvider,MD3LightTheme as DefaultTheme } from 'react-native-paper';
import SaloonByLocations from '../SaloonByLocation.jsx/SaloonByLocations';
import Mens from '../Mens/Mens';
// import {  } from 'react-native-paper';
// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
export default function Main() {
    return (
       <SafeAreaView style={{flex:1}}>
         <NavigationContainer>
          <PaperProvider  theme={theme}>
            <Home/>
            {/* <Mens/> */}
            {/* <SaloonByLocations/> */}
          </PaperProvider>
          {/* <BottomTabNavigator /> */}
        </NavigationContainer>
       </SafeAreaView>
      );
}

const styles = StyleSheet.create({})
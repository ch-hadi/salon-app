import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../../components/Tabs/BottomTabNavigator'
import Home from '../Home/Home';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }
export default function Main() {
    return (
       <View style={{flex:1}}>
         <NavigationContainer>
          <Home/>
          {/* <BottomTabNavigator /> */}
        </NavigationContainer>
       </View>
      );
}

const styles = StyleSheet.create({})
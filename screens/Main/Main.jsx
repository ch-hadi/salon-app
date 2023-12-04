import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../../components/Tabs/BottomTabNavigator'

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }
export default function Main() {
    return (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({})
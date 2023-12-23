// BottomTabNavigator.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile';
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Offers') {
            iconName = focused ? 'rainy-sharp' : 'rainy-sharp';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
      })}   
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
       <Tab.Screen options={{headerShown:false}} name="Offers" component={Profile} />
      <Tab.Screen options={{headerShown:false}} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

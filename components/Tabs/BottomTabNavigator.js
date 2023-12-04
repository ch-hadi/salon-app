// BottomTabNavigator.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="Home" component={Home} />
      <Tab.Screen options={{headerShown:false}} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

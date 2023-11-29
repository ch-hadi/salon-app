// App.js

import React, { useEffect, useState } from 'react';
import {Animated, View, Text, TextInput, TouchableOpacity, StyleSheet,KeyboardAvoidingView,Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from './screens/Login/Login';
import { LogBox } from 'react-native';
import { SignUpScreen } from './screens/SignUp/SignUp';
LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered',
  // Add other warning messages here as needed
]);
const AppScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = false; // Change this based on your authentication state

  useEffect(() => {
    // Check if the user is not logged in and navigate to the Login screen
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
  }, [isLoggedIn, navigation]);
  const handleLogin = () => {
    navigation.navigate('Signup')
    // Add your login logic here
    // For example, you can check credentials and navigate to the main screen
    // if (username === 'example' && password === 'password') {
    //   navigation.navigate('Main');
    // } else {
    //   alert('Invalid credentials. Please try again.');
    // }
  };
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const listener = animatedValue.addListener(({ value }) => {
      // Handle value changes
      console.log('Animated value:', value);
    });

    // Clean up the listener when the component unmounts
    return () => {
      animatedValue.removeListener(listener);
    };
  }, []); // Run effect only once on mount

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View style={styles.inner}>
        <TouchableOpacity onPress={()=>handleLogin()} style={{backgroundColor:'pink', paddingVertical:4, paddingHorizontal:10}}><Text>Hammad</Text></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const AppNavigator = createStackNavigator(
  {
    // Main: MainScreen,
    App:{
      screen: AppScreen,
      navigationOptions: {
        headerShown:false,
        gestureEnabled: false,
      },
    },
    Login:{
      screen: LoginScreen,
      navigationOptions: {
        headerShown:false
      },
    },
    Signup:{
      screen: SignUpScreen,
      navigationOptions: {
        headerShown:false
      },
    }
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      gestureEnabled: false, // Enable swipe gestures for other screens
    },
  }

);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent:'center',
    alignItems:'center'
  },
});

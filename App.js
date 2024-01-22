
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  {LoginScreen}  from './screens/Login/Login';
import { LogBox } from 'react-native';
import { SignUpScreen } from './screens/SignUp/SignUp';
import Main from './screens/Main/Main';

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered',
  // Add other warning messages here as needed
]);
const AppNavigator = createStackNavigator(
  {
    // Main: MainScreen,
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
    },
    Home:{
      screen: Main,
      navigationOptions: {
        headerShown:false
      },
    }
  },
  

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

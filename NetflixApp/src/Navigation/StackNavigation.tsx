import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashPage from '../pages/Splash Screen/SplashPage';
import InitPage from '../pages/Init Screen/InitPage';
import SplashImageLogo from '../assets/SplashBgLogo';
import SignInPage from '../pages/SignIn Screen/SignInPage';

function Home() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>

      </Tab.Navigator>
    );
  }
  
  function StackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
  
        <Stack.Navigator initialRouteName='SplashPage'>

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen  options={{ headerShown: false }} name="SplashPage" component={SplashPage} />

          <Stack.Screen
      name="InitPage"
      component={InitPage}
      options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitle: () => (
       <SplashImageLogo></SplashImageLogo>
        ),
        headerBackVisible:true
      }}
 
    />
           <Stack.Screen
      name="SignInPage"
      component={SignInPage}
      options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitle: () => (
       <SplashImageLogo></SplashImageLogo>
        ),
        headerBackVisible:true
      }}
 
    />
 
        </Stack.Navigator>
    
    );
  }
export default StackNavigation;
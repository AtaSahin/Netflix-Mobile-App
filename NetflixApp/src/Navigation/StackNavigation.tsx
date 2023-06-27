import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashPage from '../pages/Splash Screen/SplashPage';
import InitPage from '../pages/Init Screen/InitPage';
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
          <Stack.Screen  options={{ headerShown: false }} name="InitPage" component={InitPage} />
 
        </Stack.Navigator>
    
    );
  }
export default StackNavigation;
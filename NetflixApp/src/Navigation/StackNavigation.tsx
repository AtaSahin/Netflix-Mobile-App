import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashPage from '../pages/Splash Screen/SplashPage';
import InitPage from '../pages/Init Screen/InitPage';
import SplashImageLogo from '../assets/SplashBgLogo';
import SignInPage from '../pages/SignIn Screen/SignInPage';
import HomePage from '../pages/Home Screen/HomePage';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomePage" component={HomePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="SplashPage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitle: () => <SplashImageLogo />,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="SplashPage"
        component={SplashPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InitPage"
        component={InitPage}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitle: () => <SplashImageLogo />,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="SignInPage"
        component={SignInPage}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitle: () => <SplashImageLogo />,
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;

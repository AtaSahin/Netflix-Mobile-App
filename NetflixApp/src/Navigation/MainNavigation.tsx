import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SplashPage from '../pages/Splash Screen/SplashPage';
import InitPage from '../pages/Init Screen/InitPage';
import SplashImageLogo from '../assets/SplashBgLogo';
import SignInPage from '../pages/SignIn Screen/SignInPage';
import HomePage from '../pages/Home Screen/HomePage';
import MovieBgLogo from '../assets/SplashBgLogo/MovieBgLogo';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="SignInPage">
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: true,
          headerStyle: {elevation: 5, shadowOpacity: 5, borderBottomWidth: 1},
          tabBarIcon: ({color, size}) => (
            <Icon name="coffee" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="SignInPage"
        component={SignInPage}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
};

const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashPage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitle: () => <MovieBgLogo />,
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="RootNavigation"
          component={RootNavigation}
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
    </NavigationContainer>
  );
};

export default StackNavigations;

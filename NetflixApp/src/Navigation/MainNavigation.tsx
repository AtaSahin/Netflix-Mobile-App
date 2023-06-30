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
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <Tab.Navigator
      initialRouteName="SignInPage"
      screenOptions={{
        tabBarStyle: {backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          headerStyle: {elevation: 5, shadowOpacity: 5, borderBottomWidth: 1},
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={'white'} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="SignInPage"
        component={SignInPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootNavigation">
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

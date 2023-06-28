import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';

function App(props) {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {store} from './src/App/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};
export default App;

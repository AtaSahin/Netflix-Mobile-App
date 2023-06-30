import React from 'react';
import StackNavigations from './src/Navigation/MainNavigation';
import {store} from './src/App/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigations />
    </Provider>
  );
};
export default App;

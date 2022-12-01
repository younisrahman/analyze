// In App.js in a new project

import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './src';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

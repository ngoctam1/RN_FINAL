import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScreen from './HomeScreen'; // đường dẫn đến file HomeScreen của bạn

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

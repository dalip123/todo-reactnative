import React from 'react';
import  {  StyleSheet, Text, View } from 'react-native';

import AppTodo from './src/container/AppTodo';
import store from './src/reducer/store';
import {Provider} from 'react-redux';
console.log("get State:",store.getState());
export default class App extends React.Component {


  render() {
    return (

        <Provider store={store}>
         <AppTodo />
        </Provider>

    );
  }
}

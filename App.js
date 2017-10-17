import React from 'react';
import  {  StyleSheet, Text, View } from 'react-native';

import AppTodo from './src/container/AppTodo';
import store from './src/reducer/store';
import {addTodo} from './src/action'
import {Provider} from 'react-redux';
store.dispatch(addTodo("hello"));
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

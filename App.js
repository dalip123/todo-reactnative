import React from 'react';
import  {  StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Root from './src/component/index';
import todoApp from './src/reducer';
let store=createStore(todoApp);
export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
         <Root />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

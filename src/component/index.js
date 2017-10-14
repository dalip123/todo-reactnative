import React from 'react';
import { View, Text}  from 'react-native';
import AddTodo from '../container/AddTodo';
export default class Root extends React.Component {

  render() {

    return (
  <View>
      <AddTodo/>
      <Text> Hello Dalip</Text>
      </View>
    )
  }
}

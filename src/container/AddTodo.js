import React, { Component} from 'react';
import { connect } from 'react-redux';
import { TextInput,View,TouchableHighlight,Text} from 'react-native';
 class AddTodo extends React.Component {
   render() {
     return (
       <View>
       <Text>Bingo</Text>
       </View>
     )

   }

}
AddTodo = connect()(AddTodo)
 
export default AddTodo

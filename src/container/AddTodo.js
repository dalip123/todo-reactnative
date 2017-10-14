import React from 'react';
import { connect } from 'react-redux';
import { TextInput ,View,TouchableHighlight,Text} from 'react-native';
import * as TodoActionCreators from '../action';
 export default class AddTodo extends React.Component {
  return
  (
    <View style={
      {
        flex:1,
      }
    }>
        <Text>Add Task!!</Text>
        <TextInput style={
          {
            height:100,
            width:300
          }
        } onChangeText={(typeText)=>{
          console.log("text:",typeText);
          input=typeText;
          console.log("input:",input);
        }} placeholder="write here"/>
        <TouchableHighlight onPress={()=>{
          console.log("text:",input);

        }} style={
          {
            backgroundColor:'#eeffcd',
            height:50,
            width:200
          }
        }>
        <Text style={
          {
            alignSelf:'center',
            fontSize:25
          }
        }>Submit</Text>
        </TouchableHighlight>
    </View>
  )
}
//AddTodo = connect()(AddTodo)

//export default AddTodo

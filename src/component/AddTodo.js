import React, { Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AddTodoCreator from '../action';
import { TextInput,View,TouchableHighlight,Text,StyleSheet} from 'react-native';
 class AddTodo extends React.Component {
    constructor(props){
      super(props);
      this.state={
        text:'',
      };
      this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit()
    {
    // const {dispatch}=this.props;
     this.props.addTodo(this.state.text);
    this.setState({text:""});
    }

     render() {

     return (
       <View>
       <Text>Add Task</Text>
       <TextInput onChangeText={(typeText)=>{
         console.log("text:",typeText);
         this.setState({text:typeText});
       }} value={this.state.text}/>
       <TouchableHighlight onPress={this.onSubmit}>
       <Text style={styles.textSubmit}>Submit</Text>
       </TouchableHighlight>
      <Text>{this.state.text}</Text>
       </View>
     )

   }

}
const styles=  StyleSheet.create({
  textSubmit:{
    justifyContent:'center',
    fontSize:25
  }
});

export default AddTodo

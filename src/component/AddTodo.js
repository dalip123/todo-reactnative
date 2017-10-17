import React, { Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AddTodoCreator from '../action';
import { ListView,TextInput,View,TouchableHighlight,Text,StyleSheet} from 'react-native';
 class AddTodo extends React.Component {
    constructor(props){
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state={
        text:'',
        dataSource: ds.cloneWithRows(['row 1', 'row 2'])
      };



      this.onSubmit=this.onSubmit.bind(this);
    }
    componentWillReceiveProps (nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
           nextProps.todos
        )
      });
    }
  }
    onSubmit()
    {
    // const {dispatch}=this.props;
     this.props.addTodo(this.state.text);

    this.setState({text:""});
    }

     render() {
      const {todos}=this.props;
      console.log("todos:",todos);
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
      <ListView
       style={styles.container}
       dataSource={this.state.dataSource}
       renderRow={(todos) => <View><Text>{todos.text}</Text></View>}
     />

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

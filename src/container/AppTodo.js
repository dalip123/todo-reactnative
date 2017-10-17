import React from 'react';
import { View, Text,StyleSheet}  from 'react-native';
import AddTodo from '../component/AddTodo';
import {connect} from 'react-redux';
import {bindActionCreators,dispatch} from 'redux';
import VisibleTodoList from './VisibilityFilter';
import * as AddTodoCreator from '../action'
 class AppTodo extends React.Component {
     constructor(props){
       super(props);
     console.log("type of AddTodoCreator",AddTodoCreator);
     console.log("dispatch:",dispatch);
     }
  render() {
  const {dispatch}=this.props;
    console.log("dispatch",dispatch);
    return (
  <View style={styles.container}>
  <AddTodo {...bindActionCreators(AddTodoCreator,dispatch)}/>
     <VisibleTodoList/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})

export default connect()(AppTodo);

import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight,Text} from 'react-native';
const Todo=({text,completed,onClick})=>(
  <TouchableHighlight onPress={onClick} style={
    {
      textDecoration: completed?'line-through':'none'
    }
  }><Text>{text}</Text></TouchableHighlight>
)



Todo.propTypes={
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Todo

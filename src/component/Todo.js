import React from 'react';
import PropTypes from 'prop-types';
import {ListView} from 'react-native';
const Todo=({text,completed,onClick})=>(
 <ListView onPress={onClick}>{text}</ListView>
)

Todo.PropTypes={
  text: PropTypes.text.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.fun.isRequired
}
export default Todo

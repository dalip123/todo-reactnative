import React from 'react';
import {View,List,Text} from 'react-native';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onTodoClick }) => (
        <View>

<Text>{todos}</Text>

        </View>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList

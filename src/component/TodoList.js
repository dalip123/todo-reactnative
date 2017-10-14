import React from 'react';
import {List} from 'react-native';
import Todo from './Todo';


const TodoList = ({ todos, onTodoClick }) => (
  <List>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onPress={() => onTodoClick(todo.id)} />
    ))}
  </List>
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

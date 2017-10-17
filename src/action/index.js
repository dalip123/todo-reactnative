let nextTodoId = 0
export const addTodo = text => {
   console.log("i am running",text);
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
export const addTodoByInput=text=> {
  console.log("i am running",text);
 return {
   type: 'ADD_TODO_BY_INPUT',
   id: nextTodoId++,
   text
 }
}
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

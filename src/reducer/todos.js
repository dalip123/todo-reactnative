const todos=(state=[],action)=>{
  switch(action.type)
  {
    case "ADD_TODO":
    console.log("add_todo reducer is running",action);
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed:false
      }
    ]
    case "ADD_TODO_BY_INPUT":
      console.log("ADD_TODO_BY_INPUT reducer is running",action);
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]
    case "TOGGLE_TODO":
    return [
   state.map(todo=>{
     (todo.id===action.id)?{...todo,completed:!todo.completed}:todo
   })
    ]
    default :
    return state
  }
}
export default todos

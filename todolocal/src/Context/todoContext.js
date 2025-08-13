import { createContext, useContext } from "react";


export const TodoContext = createContext({
  todos : [
    {
      id:1,
      todo :"Todo - message",
      completed:false
    }
  ],
  addTodo : (todo) =>{},
  UpdatedTodo : (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {}
});

export const usetodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;


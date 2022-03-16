import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import { BiAbacus } from "react-icons/bi";

function Todo({todos, completeTodo}) {
  
  const [edit, setEdit] = useState({
    id:null,
    value:''
  });



  return todos.map((todo, index) => {
    <div 
    className={todo.isComplete ? 'todo-complete' : 'todo-row'} 
    key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
          <BiAbacus />
      </div>
    </div>
  }) 

}

export default Todo
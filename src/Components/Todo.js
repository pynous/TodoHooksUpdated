import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import '../App.css';

function Todo({todos, completeTodo, removeTodo,  handleSetUpdate}) {



    return todos.map((todo, index) => (
      <div 
      className={todo.isComplete ? 'todos-row complete' : 'todo-row'}
      key={index}
      >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text} 
      </div>
         <div className="icons">
             <RiCloseCircleLine 
             onClick={()=> removeTodo(todo.id)}
             className="delete-icon"
             />
             <TiEdit  onClick={()=>handleSetUpdate(todo)} className="edit-icon" />

         </div>
      </div>

    ));
}

export default Todo

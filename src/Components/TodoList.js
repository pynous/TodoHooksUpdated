import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../App.css';

function TodoList() {
    const [todos,setTodos] = useState([]);
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const handleSetUpdate = (todo) =>{
        setEdit({id: todo.id, value: todo.text})
    }

     const addTodo = todo => {

         if(!todo.text || /^\s*$/.test(todo.text)){
             return;
         }
       
         const newTodos = [todo, ...todos];

         setTodos(newTodos);
        
     };
 
     const removeTodo = id => {
         const remvoeArr = [...todos].filter(todo => todo.id !== id);
         
         setTodos(remvoeArr);
     }

     const updateTodo = (todoId, newValue) => {
        
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )))
     }

     const completeTodo = id => {
         let updatedTodos = todos.map(todo =>{
             if (todo.id === id) {
                 todo.isComplete = !todo.isComplete;
             }
             return todo;
         })
         setTodos(updatedTodos);
     }
    const submitUpdate = value =>{
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };


  return (
        <div>
            <h1>
                Todo App
            </h1>

                {edit.id == null?        
                <TodoForm onSubmit={addTodo}/>:
                <TodoForm edit={edit} onSubmit={submitUpdate} />
                }
                <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updateTodo={updateTodo} handleSetUpdate={handleSetUpdate}/>
           
        </div>
     

     )

}

export default TodoList

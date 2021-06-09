import React, {useState, useRef, useEffect} from 'react'
import '../App.css';

function TodoForm(props) {
    
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() =>{
      inputRef.current.focus();
    })
    
    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000 ),
            text: input
        });
        setInput('');
    }
    

    return (
   
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    {/* <button className="todo-button edit">
                       x
                   </button> */}

               <input  type="text" 
               placeholder="Update Todo" 
               value={input}
               className="todo-input edit"
               onChange={handleChange}
               ref={inputRef}
               >
               </input>

               <button className="todo-button edit">Update</button> 
               </>
            ): (
             <>

            <input  type="text" 
            placeholder="Add a Todo" 
            value={input}
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">Add Todo</button>
             </>
            ) }
        
        </form>
    );
}

export default TodoForm;

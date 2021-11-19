import React from 'react'
import { useState } from 'react';

const Learn = () => {
    const[todolist,setTodolist]=useState([]);
    const[todo,setTodo]=useState("");
    return (
       
        <div className="container">
          
            
  <h2>My To Do List</h2>
  <div className="add-todo">
  <input type="text" id="myInput" placeholder="Add New..." value={todo} onChange={(e)=>{
      setTodo(e.target.value); //used for storing todo value to settodo
  }
  }
    />
    
  <button onClick={()=>{
      setTodolist(prev=>[...prev,todo]);
      setTodo("")   
      //  used for storing previous values  and keeps empty
  }}
  >Add New</button>
  </div>
  
    
  <div className="todo-list">
  <ul>
  {todolist.map((value,i)=><li key={i}
  > 
  <div className="status-circle green" />
  <div className="todo-text">
  {value}
  </div>
  <div className="todo-close-button" 
  onClick={()=>{setTodolist(todolist.filter((_value,index)=> i !==index))
  }}></div>
  </li>
  )}  
 
  </ul> 
   {/* it is used for deleting values from todolist */}

 </div>
 </div>
 

  )
}

export default Learn

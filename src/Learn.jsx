import React from 'react'
import { useState } from 'react';
import Todo  from  "./Components/todo"

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
  }/>
    <button className="todo-button" onClick={()=>{
       if(!todo)return    //directly check the condition,than executing function
      setTodolist(prev=>[...prev,{text:todo,status:false}]);
      setTodo("")   
      //  used for storing previous values  and keeps empty
  }}
  >Add New</button>
  </div>
<div className="todo-list">
  <ul>
  {todolist.map((data,i)=>
  <Todo
  {...data}
  key={i} i={i}
  setTodolist={setTodolist}
  todolist={todolist}/>
  )}
  </ul>
  </div>
  </div>
  )
}

export default Learn

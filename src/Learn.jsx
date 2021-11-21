import React from 'react'
import { useState,useEffect } from 'react';
import Todo  from  "./Components/todo"
import postData from './Services/postData';

const Learn = () => {
  const user="Raeez";
    const[todolist,setTodolist]=useState([]);
    const[todo,setTodo]=useState("");
    const[duplicateError,setDuplicateError]=useState(false);
   
    useEffect(()=>{
      fetch(`http://192.168.1.42:8086/todos/${user}`)
      .then((result)=>result.json())
      .then((value)=>{
        setTodolist(value[0].todos.map(({text,status})=>{
          return{
            text,status,isEdirMode:false
          }
        }));

       
      })
    },[]);
    
    
    return (
       
        <div className="container">
          <h2>My To Do List</h2>
     
  <div className="add-todo">
  <input type="text" id="myInput" placeholder="Add New..." value={todo} onChange={(e)=>{
      setTodo(e.target.value); //used for storing todo value to settodo
  }
  }/>
    <button className="todo-button" onClick={()=>{
       if(!todo)return 
      if(todolist.filter(({text})=> todo.toLowerCase()===text.toLowerCase()).length){
        setDuplicateError(true);
        setTimeout(()=>{setDuplicateError(false);},1500)
      console.log(todo);
        return}

         //directly check the condition,than executing function
         postData("/todos",
         {
          
            user,
            todos:[
              ...todolist.map(({text,status})=>{
                return{
                text,
                status
                }}),
                {
                text:todo,
                status:false
                }]

         });
      setTodolist(prev=>[...prev,{text:todo,status:false,isEditMode:false}]);
      
      setTodo("")   
      //  used for storing previous values  and keeps empty
  }}
  >Add New</button>
  {duplicateError && <div className="duplicate-error">
  Already exists
  </div>}
  
  </div>
<div className="todo-list">
  <ul>
  {todolist.map((data,i)=>
  <Todo
  {...data}
  key={i} i={i}
  setTodolist={setTodolist}
  todolist={todolist}
  user={user}/>
  )}
  </ul>
  </div>
  </div>
  )
}

export default Learn

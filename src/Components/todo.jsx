import React, { useState } from "react";
const Todo = ({setTodolist,status,text,i,todolist,isEditMode}) => {
  const[editText,setEditText]=useState(text);
  const[errorTextVisibility,setErrorTextVisibility]=useState(false);
  const[duplicateError,setDuplicateError]=useState(false);
    return ( 
        <li key={i}> 
  <div className={`status-circle ${status? "status-circle--active": ""}`}
  onClick={
    ()=>{
      setTodolist(
        prev=>{
          let newTodoList=[...prev];
          let newTodo={...newTodoList[i]};
          newTodo.status=!newTodo.status;
          newTodoList[i]=newTodo;
          return newTodoList
        }
      )
    }
  }
  
  />
  {isEditMode?
  <>
  <div className="todo-edit-text-contaniner">
    <input type="text" className="todo-edit-text-field" value={editText} onChange={(e)=>{
      setEditText(e.target.value);
  }} 
  />
    <div className="todo-edit-cancel-button"

onClick={
  ()=>{
    setTodolist(
      prev=>{
        let newTodoList=[...prev];
        let newTodo={...newTodoList[i]};
      newTodo.isEditMode=false;
        newTodoList[i]=newTodo;
        return newTodoList
      }
    )
  }
}

    
    />
    {errorTextVisibility && <div className="todo-error-text">
       Please something Here!
    </div>}
    {duplicateError && <div className="duplicate-error-text">
  Already exists
  </div>}
  </div>
  <div className="todo-edit-save-button"
   onClick={
    ()=>{
      if(!editText){
        setErrorTextVisibility(true);
        setTimeout(()=>{setErrorTextVisibility(false);
        },1500)
        return
      }
      if(text !=editText && todolist.filter(({text})=> text.toLowerCase()===editText.toLowerCase()).length){
        setDuplicateError(true);
        setTimeout(()=>{setDuplicateError(false);},1500)
        return}

      
      
      setTodolist(
        prev=>{
          let newTodoList=[...prev];
          let newTodo={...newTodoList[i]};
          newTodo.isEditMode=false;
          newTodo.text=editText;
          newTodoList[i]=newTodo;
          return newTodoList
        }
      )
    }
  }
  
  
  />
  </>
  :
  <>
  <div className="todo-text">
  {text}
  </div>
  <div className="todo-edit-button"
  onClick={
    ()=>{
     if(todolist.filter(({isEditMode})=>isEditMode).length)return;
     setTodolist(
        prev=>{
          let newTodoList=[...prev];
          let newTodo={...newTodoList[i]};
          newTodo.isEditMode=true;
         
          newTodoList[i]=newTodo;
          return newTodoList
        }
      )
    }
  }
 />
    </>}
    <div className="todo-close-button"
     onClick={()=>{setTodolist(todolist.filter((_value,index)=> i !==index))
  
  }}/>
  
  </li>
  )}  
    

export default Todo


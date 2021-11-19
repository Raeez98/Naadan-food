import React  from "react-dom";
const todo = ({setTodolist,status,text,i,todolist}) => {
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
  <div className="todo-text">
  {text}
  </div>
  <div className="todo-edit-button"></div>
  <div className="todo-close-button" 
  onClick={()=>{setTodolist(todolist.filter((_value,index)=> i !==index))
  }}/>

 
  </li>
  )}  
    

export default todo


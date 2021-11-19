import React from 'react'
import { useState } from 'react'

const Learn1 = () => {
    const[todolist,setTodoList]=useState([]);
    
    const[todo,setTodo]=useState("");
    return (
        <div>
            <h1>Learn</h1>
            <h2>MY To do  list</h2>
            <input type="text" id="myinput" placeholder="Add New" value={todo} onChange={(e)=>{
            setTodo(e.target.value);


            }
        }
        />
        <button onClick={()=>{
            setTodoList(prev=>[...prev,todo])
                setTodo("")
            }}
           >Submit 
            </button>   

            <ul>
            {todolist.map((value,i)=>
            <li key={i}
             onClick={()=>{setTodoList(todolist.filter((_value,index)=>i !==index))

            }}>
            {value}</li>)}
            </ul>
        


        </div>
    )
}

export default Learn1


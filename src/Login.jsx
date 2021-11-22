import { useState } from "react";



const Login  = ({history}) => {
    const[userName,setUserName]=useState("")
    const  loginUser=(e)=>{
        e.preventDefault();
         if(!userName)return         // this is used  for default value that to avoid reloading of page
    
         } 

     if(localStorage.getItem("userName")){
         history.push("/learn/user");
     }

    return (
        <div className="container">
             <h2>Login</h2>
             <form  style={{
                 display:"grid",
                 gridTemplateColumns:"auto auto",
                 justifyContent:"center"


    }}   onSubmit={loginUser}>
    
               <input type="text"
               value={userName}
               onChange={
                   (e)=>{
                       setUserName(e.target.value);  // to get input value
                   }
               }

               
               />
               <button type="submit">Login</button>
               </form>  
        </div>
       
    )
}

export default Login

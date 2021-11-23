import { useState } from "react";
import { Link } from "react-router-dom";



const Login  = ({history}) => {
    const[userName,setUserName]=useState("")
    const[errorTextVisibility,setErrorTextVisibility]=useState(false);
    const  loginUser=(e)=>{
        e.preventDefault();
         if(!userName)
         return;
                
         // this is used  for default value that to avoid reloading of page
          fetch(`http://192.168.1.42:8086/todos/${userName}`)   // defining the url of those users
      .then((result)=>result.json())
      .then((value)=>{
        if(!value.length){
            setErrorTextVisibility(true);
            setUserName("");
             return;
        }
        localStorage.setItem("userName",userName);
        history.push("/learn/user");
        })

       
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
               
                {errorTextVisibility && <div className="error-text">
  Invalid User Name
  </div>}
  <div className="link-section">
  <Link to="/learn/CreateUser"> Create New  </Link>
  </div>
        </div>
       
    )
}

export default Login

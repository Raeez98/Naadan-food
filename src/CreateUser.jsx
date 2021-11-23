import { useState } from "react";
import postData from "./Services/postData"
import { Link } from "react-router-dom";


const CreateUser = ({history}) => {
    const[userName,setUserName]=useState("")
    const[errorTextVisibility,setErrorTextVisibility]=useState(false);
    const createNewUser=(e)=>{
        e.preventDefault();
         if(!userName)return 
                 // this is used  for default value that to avoid reloading of page
                 fetch(`http://192.168.1.42:8086/todos/${userName}`)   // defining the url of those users
                 .then((result)=>result.json())
                 .then((value)=>{
                   if(value.length){
                       setErrorTextVisibility(true);
                       setUserName("");
                        return;
                   }
        postData("/todos",
         {
          user:userName,
            todos:[]
             }).then(result=>{
             if(result){
                localStorage.setItem("userName",userName);   //used to store username in local storage 
             history.push(`/learn/user`); // push the user in 
     }

}) 
}
)}
     if(localStorage.getItem("userName")){
         history.push("/learn/user");
     }

    return (
        <div className="container">
             <h2>Create User</h2>
             <form  style={{
                 display:"grid",
                 gridTemplateColumns:"auto auto",
                 justifyContent:"center"


    }}   onSubmit={createNewUser}>
    
               <input type="text"
               value={userName}
               onChange={
                   (e)=>{
                       setUserName(e.target.value);  // to get input value
                   }
               }

               
               />
               
               <button type="submit">ADD</button>
        </form>  
        {errorTextVisibility && <div className="error-text">
            User Already exist
            </div>}
            <div className="link-section">
                Already have an account
                <Link to="/learn/login">  Click here!  </Link>

            </div>
        </div>
       
    )
}

export default CreateUser

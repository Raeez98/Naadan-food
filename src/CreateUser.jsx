import { useState } from "react";
import postData from "./Services/postData"


const CreateUser = ({history}) => {
    const[userName,setUserName]=useState("")
    const createNewUser=(e)=>{
        e.preventDefault();
         if(!userName)return         // this is used  for default value that to avoid reloading of page
        postData("/todos",
         {
          user:userName,
            todos:[]
             }).then(result=>{
             if(result){
                localStorage.setItem("userName",userName);   //used to store username in local storage 
             history.push(`/learn/user`); // push the user in 
     }

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
        </div>
       
    )
}

export default CreateUser
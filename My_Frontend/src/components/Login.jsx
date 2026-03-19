import { useState } from "react";
import "../style/AddTask.css";
import {Link,useNavigate} from "react-router-dom"
export default function Login(){
        const navigate=useNavigate();
        const [userData,setUserData]=useState();
        const HandleLogin=async()=>{
     let result = await fetch(
            "http://localhost:3200/user/login",
            {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        result = await result.json();
         if (result) {
            navigate("/list");
            console.log("login successfully");
        }
  };
    return(
        <div className="addTaskContainer">
            <h1 className="addTaskTitle">Login</h1>
           <div className="formGroup">
                <label>Email</label>
                <input onChange={(event)=>setUserData({...userData,emailId:event.target.value})}
                 type="email" placeholder="Enter user email"/>
                <br></br>
                <br></br>
                  <label>Password</label>
                  <input onChange={(event)=>setUserData({...userData,password:event.target.value})}
                   type="password" placeholder="Enter the password"/>
             </div>
            <button className="addBtn" onClick={HandleLogin}>Login</button>
            <br></br>
            <br></br>
               <span> Don't have an account?{' '}
             <Link to="/">Sign up</Link> 
               </span>
           </div>
    )
}
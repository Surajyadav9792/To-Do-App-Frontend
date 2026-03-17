import { useState } from "react";
import "../style/AddTask.css";
import {Link} from "react-router-dom"
export default function Login(){
        const [userData,setUserData]=useState();
        const HandleLogin=async()=>{
     let result = await fetch(
            "http://localhost:3200/user/login",
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        result = await result.json();
         console.log(result);
  }
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
              <span>Go to</span>
            <Link to="/signup">Sign up</Link> 
           </div>
    )
}
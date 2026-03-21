import { useState } from "react";
import "../style/AddTask.css";
import {Link,useNavigate} from "react-router-dom"
export default function SignUp(){
        const navigate=useNavigate();
    const [userData,setUserData]=useState();
  const HandleSignUp=async()=>{
    let result = await fetch(
            "http://localhost:3200/user/signup",
             {
                method: "POST",  
                credentials: "include",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        result=await result.json();
        if (result) {
            navigate("/list");
            console.log("login successfully");
        }
  }
    return(
        <div className="addTaskContainer">
            <h1 className="addTaskTitle">Sign Up</h1>
            <div className="formGroup">
                <label>Name</label>
                <input onChange={(event)=>setUserData({...userData,name:event.target.value})}
                type="text" placeholder="Enter user name"/>
                <br></br>
                <br></br>
                <label>Email</label>
                <input onChange={(event)=>setUserData({...userData,emailId:event.target.value})}
                type="email" placeholder="Enter user email"/>
                <br></br>
                <br></br>
                <label>Password</label>
                <input onChange={(event)=>setUserData({...userData,password:event.target.value})}
                 type="password" placeholder="Enter the password"/>
             </div>
            <button className="addBtn" onClick={HandleSignUp}>Sign Up</button>
            <br></br>
            <br></br>
            <span>Already have a account {'  '}
             <Link to="/login">Login</Link>
             </span>
           </div>
    )
}
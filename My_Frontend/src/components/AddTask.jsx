import { useState } from "react";
import "../style/AddTask.css";
import {useNavigate} from "react-router-dom"
export default function AddTask(){
    const [taskData,setTaskData] = useState({});
    const navigate=useNavigate();
    const HandleAddTask = async () => {
        let result = await fetch(
            "http://localhost:3200/todo/addTask",{
                credentials:'include'
              },
            {
                method: "POST",
                body: JSON.stringify(taskData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        result = await result.json();
        if (result) {
            navigate("/list");
            console.log("new task added");
        }
    };

    return(
        <div className="addTaskContainer">
            <h1 className="addTaskTitle">Add New Task</h1>
            <div className="formGroup">
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Enter task title"
                    onChange={(e)=>setTaskData({...taskData,title:e.target.value})}
                />
            </div>
            <div className="formGroup">
                <label>Description</label>
                <textarea
                    placeholder="Enter task description"
                     onChange={(e)=> setTaskData({...taskData,description:e.target.value})
                    }
                />
            </div>
            <button className="addBtn" onClick={HandleAddTask}>Add Task</button>
        </div>
    )
}
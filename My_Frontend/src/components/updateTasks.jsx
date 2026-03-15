import { useEffect, useState } from "react";
import "../style/AddTask.css";
import {useNavigate, useParams} from "react-router-dom"
export default function UpdateTask(){
    const [taskData,setTaskData] = useState({});

    const {id}=useParams();
    useEffect(()=>{
        gettask(id)
    },[]);
    const gettask=async(id)=>{
        let task=await fetch(`http://localhost:3200/todo/tasks/`+id);
        task=await task.json();
        setTaskData(task);
    }

return(
    <div className="addTaskContainer">
        <h1 className="addTaskTitle">Update Task </h1>
         <div className="formGroup">
          <label>Title</label>
              <input value={taskData?.title} type="text" placeholder="Enter task title"
                  onChange={(e)=> setTaskData({...taskData, title:e.target.value})}  />
            </div>

            <div className="formGroup">
                <label>Description</label>
                <textarea
                   value={taskData?.description}
                    placeholder="Enter task description"
                    onChange={(e)=>
                        setTaskData({...taskData, description:e.target.value })
                      }
                 />
            </div>
            <button className="addBtn">Update Task</button>

        </div>
    )
}
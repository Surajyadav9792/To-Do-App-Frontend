import { useEffect, useState } from "react";
import "../style/AddTask.css";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTask(){

    const [taskData,setTaskData] = useState({
        title:"",
        description:""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        gettask(id)
    },[]);


    const gettask = async(id)=>{

        let task = await fetch(
            `http://localhost:3200/todo/tasks/` + id
        );

        task = await task.json();

        setTaskData(task);
    }


    const updateTask = async () => {

        let res = await fetch(
            `http://localhost:3200/todo/update/` + id,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(taskData)
            }
        );

        let data = await res.json();

        if(data.success){
            console.log("updated");
            navigate("/");   // sir usually ye karte hain
        }

    }


return(
    <div className="addTaskContainer">

        <h1 className="addTaskTitle">
            Update Task
        </h1>

         <div className="formGroup">

          <label>Title</label>

              <input
                  value={taskData.title}
                  type="text"
                  placeholder="Enter task title"

                  onChange={(e)=>
                      setTaskData({
                          ...taskData,
                          title:e.target.value
                      })
                  }
              />

        </div>


        <div className="formGroup">

            <label>Description</label>

            <textarea
               value={taskData.description}

                placeholder="Enter task description"

                onChange={(e)=>setTaskData({...taskData, description:e.target.value}) }
               />

        </div>
  

        <button
            className="addBtn"
            onClick={updateTask}
        >
            Update Task
        </button>


    </div>
)
}
import { useState, useEffect } from "react";
import "../style/List.css";
import {Link} from "react-router-dom"

export default function List() {

    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        getListData();
    }, []);

    const getListData = async () => {

        let list = await fetch(
            "http://localhost:3200/todo/tasks",{
                credentials:'include'
            });
         list = await list.json();

        setTaskData(list);

    };

   const deleteTask = async(id) => {
        let item = await fetch(
            `http://localhost:3200/todo/delete/${id}`,
        {
            method: "DELETE"
        }
    );
       item = await item.json(); 
        if(item.success){
            console.log("item deleted");
             getListData();//by this the present data is comes in ui
        }
    }; 

    return (

        <div className="listContainer">

            <h1 className="listTitle">
                To Do List
            </h1>

            <table className="todoTable">

                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                        <th>Reset</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        taskData.map((item, index) => (

                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td><button onClick={()=>deleteTask(item._id)}>Delete</button></td>
                                <Link to={"update/"+item._id}>Update</Link>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>

    );
}
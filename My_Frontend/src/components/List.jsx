import { useState, useEffect } from "react";
import "../style/List.css";

export default function List() {

    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        getListData();
    }, []);

    const getListData = async () => {

        let list = await fetch(
            "http://localhost:3200/todo/tasks"
        );

        list = await list.json();

        setTaskData(list);

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
                    </tr>
                </thead>

                <tbody>

                    {
                        taskData.map((item, index) => (

                            <tr key={item._id}>

                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}
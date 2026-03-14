export default function AddTask(){
 return(
    <div className="container">
        <h1>Add New Task</h1>

        <form>
            <label>Title</label>
            <input type="text" name="title" placeholder="Enter task title"/>

            <label>Description</label>
            <textarea name="description" placeholder="Enter Task Description"></textarea>

            <button>Add Task</button>
        </form>

    </div>
 )
}
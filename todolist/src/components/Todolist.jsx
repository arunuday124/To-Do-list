import React,{useState} from "react"
import './Todolist.css';
function Todolist(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(e)
    {
        setNewTask(e.target.value);
    }




    function addTasks()
    {
        if(newTask.trim() !== "")
        {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }




    function deleteTasks(index)
    {
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }





    function moveTasksUp(index)
    {
        if(index > 0)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = 
            [updatedTasks[index -1] , updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }




    
    function moveTasksDown(index)
    {
        if(index < tasks.length -1 )
            {
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index +1]] = 
                [updatedTasks[index +1] , updatedTasks[index]];
    
                setTasks(updatedTasks);
            }
    }





    return(
        <div className="todolist">
            <h1>TO-DO-LIST</h1> 

            <div>
                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button 
                className="add-btn"
                onClick={addTasks}>
                Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>


                        <button className="delete-btn"
                        onClick={() => deleteTasks(index)}>
                            ❌
                        </button>

                        <button className="move-btn"
                        onClick={() => moveTasksUp(index)}>
                            👆
                        </button>

                        <button className="move-btn"
                        onClick={() => moveTasksDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default Todolist
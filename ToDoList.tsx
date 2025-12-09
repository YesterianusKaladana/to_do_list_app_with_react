import {useState} from 'react';

function ToDoList() {

    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        if(newTask.trim()!==""){
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        } 
    } 

    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
        
    }

    function handleMoveTaskUp(index){
        if(index > 0){ // Can't move the first task up

            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks);
        }  
    }

    function handleMoveTaskDown(index){
         if(index < tasks.length - 1){ // Can't move the last task down

            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }  
    }



  return (
    <div className='todo_list'>

        <h1>My To-Do List Apps</h1>

        <div>
            <input type="text" placeholder='Enter your tasks..'
             value={newTask} onChange={handleInputChange} />
            <button className='add_button' onClick={handleAddTask}>Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                     <button className='delete_button' onClick={() => handleDeleteTask(index)}>
                        ❌
                     </button>
                     <button className='move_button' onClick={() => handleMoveTaskUp(index)}>
                        ⬆️
                     </button>
                     <button className='move_button' onClick={() => handleMoveTaskDown(index)}>
                        ⬇️
                     </button>
                </li> 
                )}
        </ol>

    </div>
  )
}

export default ToDoList
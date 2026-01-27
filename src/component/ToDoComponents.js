import React, { useState } from "react";

const ToDoComponents = ({ name, modifiedChildName }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Walk the cat" },
    { id: 2, text: "Throw the dishes away" },
    { id: 3, text: "Buy new dishes" },
  ]);
  const [newTask, setNewTask] = useState("");


   const onChangeHandler = (e) =>{
        setNewTask (e.target.value);
   }
    const addTask = () =>{
        console.log("New Task:", newTask);
        console.log("next:",Math.max(...tasks.map(t => t.id)));
        if(newTask.trim() !== "") {
            const nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
            setTasks(prev => [...prev, { id: nextId, text: newTask.trim() }]);
       
        setNewTask("");
        }
}

  const deleteTask = (index) => {
    const updateNewTaskList = tasks.filter((task) => task.id !== index);
    setTasks(updateNewTaskList);
  };
  // child-Uplifting state example
  const changeName = () => {
    const newName = name + " welcome";
    modifiedChildName(newName);
  };
  // End of child-Uplifting state example
  return (
    <div className="to-do-list">
      <p>Name from child Component: {name}</p>
      <button
        className="border-2 bg-amber-300 text-black m-2 p-2"
        onClick={changeName}
      >
        change name
      </button>
      <div className="to-do-input">
        <input
          name="to-do-task"
          className="border-2 border-black m-2 p-2"
          type="text"
          value={newTask}
          onChange={onChangeHandler}
        />
        <button
          className="border-2 bg-amber-300 text-black m-2 p-2"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <div className="to-do-task-list">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="to-do-task-item m-2 p-2 border-2 border-gray-400"
          >
            <span>{task.text}</span>
            <button
              className="border-2 bg-amber-300 text-black m-2 p-2"
              onClick={() => deleteTask(task.id)}
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>

     
    </div>
  );
};
export default ToDoComponents;

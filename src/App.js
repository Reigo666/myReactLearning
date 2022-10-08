// import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React,{ useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks,setTasks]=useState(props.tasks);

  const taskList = tasks?.map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    )
  );
  const headingNoun=taskList.length!==1?'tasks':'task';
  const headingText=`${taskList.length} ${headingNoun} remaining.`;

  function addTask(name) {
    //const newTask={id:'todo-${nanoid()}', name, completed:false};
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks,newTask]);
  }
  function toggleTaskCompleted(id) {
    const updateTask=tasks.map((task)=>{
      if(id==task.id){
        return {...task,completed:!task.completed};
      }
      return task;
    });
    setTasks(updateTask);
  }
  function deleteTask(id){
    const remainTasks=tasks.filter((task)=>{
      return task.id!==id;
    });
    setTasks(remainTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          onClick={()=>alert("Hello")}
        >
          Say Hi!
        </button>
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {taskList}
      </ul>
    </div>
  );
}

export default App;

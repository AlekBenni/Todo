import React, { useState } from 'react';
import Todolist, { TaskType } from './Todolist';

export type FilterValuesType = "all" | "complited" | "active";

function App() {

let [tasks, setTasks] = useState<Array<TaskType>>([
  {id: 1, title: "CSS" , isDone: true},
  {id: 2, title: "JS" , isDone: true},
  {id: 3, title: "React" , isDone: false},
  {id: 4, title: "Redax" , isDone: false}
])

let [filter, setFilter] = useState<FilterValuesType>("all");

function removeTask(id:number){
  let filteredTasks = tasks.filter(t => t.id !== id)
  setTasks(filteredTasks)
}

function changeFilter(fil:FilterValuesType){
  setFilter(fil)
}

let tasksForTodolist = tasks;
if(filter === "complited"){
  tasksForTodolist = tasks.filter(t => t.isDone === true)
}
if(filter === "active"){
  tasksForTodolist = tasks.filter(t => t.isDone === false)
}

  return (
    <div>
      <Header/>
      <div className='container mt-3'>
        <div className='row'>
          <Todolist title="What to learn" 
          tasks={tasksForTodolist} 
          removeTask = {removeTask}
          changeFilter = {changeFilter}
          />
        </div>
      </div>      
    </div>
  );
}



function Header(){
  return(
    <div className='alert bg-danger text-white text-center mb-5'>
      <h1>Hello my TodoList</h1>
    </div>
  )
}

export default App;

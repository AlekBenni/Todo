import React from 'react';
import Todolist, { TaskType } from './Todolist';

function App() {

let tasks1: Array<TaskType> = [
  {id: 1, title: "CSS" , isDone: true},
  {id: 2, title: "JS" , isDone: true},
  {id: 3, title: "React" , isDone: false},
  {id: 4, title: "Redax" , isDone: false}
]

let tasks2: Array<TaskType> = [
  {id: 1, title: "Terminator" , isDone: true},
  {id: 2, title: "Jentelmen of fortune" , isDone: true}
]

  return (
    <div>
      <Header/>
      <div className='container mt-3'>
        <div className='row'>
          <Todolist title="What to learn" tasks={tasks1} />
          <Todolist title="What to watch" tasks={tasks2}/>
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

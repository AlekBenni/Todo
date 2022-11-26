import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";

type TodolistPropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (id: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (task:string) => void
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

function Todolist (props:TodolistPropsType){
  let [newTaskTitle, setNewTaskTitle] = useState("");
  const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13){
      props.addTask(newTaskTitle)
      setNewTaskTitle("")}}
  const addTask = () => {
    props.addTask(newTaskTitle)
    setNewTaskTitle("")
  }    
  const onAllClickHandler = () => {props.changeFilter("all")}
  const onAlctiveClickHandler = () => {props.changeFilter("active")}
  const onComplitedClickHandler = () => {props.changeFilter("complited")}
  
    return (
      <div className='col-4'>
        <div className='border p-3 rounded shadow '>
        <h3>{props.title}</h3>
        <div>
        <div className="input-group mb-3">
          <input type="text" 
          onKeyDown={(e) => { onKeyPressHandler(e) }}  
          value={newTaskTitle} 
          onChange={(e) => {onChangeTitleHandler(e)}}
          className="form-control" placeholder="Add a new Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button onClick={() => {addTask()}}
          className="btn btn-danger" type="button" id="button-addon2">Button</button>
        </div>
        <ul className='list-group'>
          {
          props.tasks.map((task) => {
            const onRemoveHandler = () => {
              props.removeTask(task.id)
            }
              return (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                  <input className="form-check-input me-2" type="checkbox" checked={task.isDone} id="flexCheckDefault"/>
                  <span>{task.title}</span>
                  </div>
                  <button type="button" className="btn btn-outline-danger btn-sm" 
                  onClick={() => {onRemoveHandler()}}>X</button>
                </li>
              )
          })}
        </ul>
        <div className='d-flex justify-content-around mt-3'>
          <button onClick={() => onAllClickHandler()} type="button" className="btn btn-primary">All</button>
          <button onClick={() => onAlctiveClickHandler()} type="button" className="btn btn-success">Active</button>
          <button onClick={() => onComplitedClickHandler()} type="button" className="btn btn-danger">Complited</button>
        </div>
        </div>
        </div>
      </div>
    )
  }

  export default Todolist
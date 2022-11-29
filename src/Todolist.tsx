import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";

type TodolistPropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (id: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (task: string) => void;
    changeTaskStatus: (taskId: string, status: boolean) => void;
    filter:FilterValuesType
}

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

function Todolist (props:TodolistPropsType){
// useStates live here
  let [newTaskTitle, setNewTaskTitle] = useState("");
  let [error, setError] = useState(false)

  const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
    setError(false)
  }
  const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13){
    if(newTaskTitle.trim() === "") {
      setError(true) 
      return
    } 
      props.addTask(newTaskTitle)
      setNewTaskTitle("")
    }}
  const addTask = () => {
    if(newTaskTitle.trim() === "") {
      setError(true)
      return
    }
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
        <div className="input-group mb-3 has-validation">
          <input type="text" 
          onKeyDown={(e) => { onKeyPressHandler(e) }}  
          value={newTaskTitle} 
          onChange={(e) => {onChangeTitleHandler(e)}}
          className={error ? "form-control is-invalid" : "form-control"} placeholder="Add a new Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button onClick={() => {addTask()}}
          className="btn btn-danger" type="button" id="button-addon2">Button</button>
            {error ? <div className="invalid-feedback"> Title is required! </div> : <span></span>}
        </div>
        <ul className='list-group'>
          {
          props.tasks.map((task) => {
            const onRemoveHandler = () => { props.removeTask(task.id) }
            const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => { props.changeTaskStatus(task.id, e.currentTarget.checked) }
              return (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                  <input className="form-check-input me-2" type="checkbox" 
                  checked={task.isDone} 
                  onChange={onChangeHandler}
                  id="flexCheckDefault"/>
                  <span>{task.title}</span>
                  </div>
                  <button type="button" className="btn btn-outline-danger btn-sm" 
                  onClick={() => {onRemoveHandler()}}>X</button>
                </li>
              )
          })}
        </ul>
        <div className='d-flex justify-content-around mt-3'>
          <button onClick={() => onAllClickHandler()} type="button" className = {props.filter === "all" ? "btn btn-primary" : "btn btn-outline-primary"}>All</button>
          <button onClick={() => onAlctiveClickHandler()} type="button" className = {props.filter === "active" ? "btn btn-success" : "btn btn-outline-success"}>Active</button>
          <button onClick={() => onComplitedClickHandler()} type="button" className = {props.filter === "complited" ? "btn btn-danger" : "btn btn-outline-danger"}>Complited</button>
        </div>
        </div>
        </div>
      </div>
    )
  }

  export default Todolist
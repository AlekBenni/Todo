import { FilterValuesType } from "./App";

type TodolistPropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (id: number) => void;
    changeFilter: (value: FilterValuesType) => void;
}

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
}

function Todolist (props:TodolistPropsType){
    return (
      <div className='col-4'>
        <div className='border p-3 rounded shadow '>
        <h3>{props.title}</h3>
        <div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Text me" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-danger" type="button" id="button-addon2">Button</button>
        </div>
        <ul className='list-group'>
          {
          props.tasks.map((task) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                  <input className="form-check-input me-2" type="checkbox" checked={task.isDone} id="flexCheckDefault"/>
                  <span>{task.title}</span>
                  </div>
                  <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => {props.removeTask(task.id)}}>X</button>
                </li>
              )
          })}
        </ul>
        <div className='d-flex justify-content-around mt-3'>
          <button onClick={() => props.changeFilter("all")} type="button" className="btn btn-primary">All</button>
          <button onClick={() => props.changeFilter("active")} type="button" className="btn btn-success">Active</button>
          <button onClick={() => props.changeFilter("complited")} type="button" className="btn btn-danger">Complited</button>
        </div>
        </div>
        </div>
      </div>
    )
  }

  export default Todolist
type TodolistPropsType = {
    title: string;
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
          <li className="list-group-item"><input className="form-check-input me-2" type="checkbox" checked={true} id="flexCheckDefault"/>HTML & CSS</li>
          <li className="list-group-item"><input className="form-check-input me-2" type="checkbox" checked={true} id="flexCheckDefault"/>Java Script</li>
          <li className="list-group-item"><input className="form-check-input me-2" type="checkbox" checked={true} id="flexCheckDefault"/>React</li>
        </ul>
        <div className='d-flex justify-content-around mt-3'>
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
        </div>
        </div>
        </div>
      </div>
    )
  }

  export default Todolist
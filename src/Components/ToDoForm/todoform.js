import { useState, useEffect } from "react";

const ToDoForm = ()=>{

    const [task, setTask] = useState('');

    const [TasksDone, setTasks] = useState([]);

    const createTask = (evt)=>
    {
        setTask(evt.target.value);
    }

    const addTask = (evt)=>{
        evt.preventDefault();
        TasksDone.push(task);
        setTask('');
    }

    const deleteTask =(i)=>{
        TasksDone.splice(TasksDone.indexOf(i), 1);
    }

    const complete =(item)=>{
        document.getElementById(item).style.textDecoration = 'line-through';
    }

    return(
        <>
        <div className="container w-50 mx-auto bg-primary text-end">
            <h2>To Do App!</h2>
        <form onSubmit={(event)=>{addTask(event)}}>
            <div className="mb-3">
              <label htmlFor="text" className="form-label"></label>
              <input type="text" name="text" id="text" onChange={(event)=>{createTask(event)}} className="form-control" value={task} placeholder="Enter New Task .." />
            </div>

            <button type='submit' className="btn btn-dark">Add</button>
        </form>
        </div>

        <div className="container w-50 mx-auto bg-secondary">
            <table className="w-100">
                <thead>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </thead>
                <tbody>
                    <tr><td> &nbsp; </td></tr>
                     {
                        TasksDone.map((item, index)=>{
                            return<>
                                   <tr className="col-12 mt-5">
                                      <td className="col-4"> <button className="btn btn-danger" onClick={()=>{deleteTask(item)}}>Delete</button></td>
                                      <td className="col-4"> <button className="btn btn-success" onClick={()=>{complete(item)}}>Complete</button></td>
                                      <td className= 'col-4 p-3 bg-light my-3 border border-2 border-dark' id={item}> {item} </td>
                                   </tr>
                                   <tr><td> &nbsp; </td></tr>
                                   </>
                        })
                     }
                </tbody>
            </table>
        </div>
        </>
    );

}
export default ToDoForm;
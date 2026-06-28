import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Users(){
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://crud-server-lake.vercel.app/api/users')
    .then(result => setUsers(result.data))
    .catch(err => (console.log(err)));
  } , [])
  return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-outline-primary">Add+</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>{
              const deleteEntry = ()=>{
                axios.delete("https://YOUR-BACKEND.vercel.app/api/deleteUser/" + user._id)
                .then(() => {
                  setUsers((previousUsers) =>
                    previousUsers.filter((USER) => USER._id !== user._id)
                  );
                }) 
              }
              return (<tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-warning">Update</Link>
                    <button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={deleteEntry}>
                      Delete
                    </button>
                </td>
              </tr>);
            })}      
          </tbody>
        </table>
      </div>
    </div>
  )
}
 export default  Users;
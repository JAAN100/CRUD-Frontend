import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateUser({setUsers}){
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [age , setAge] =useState();
  const navigate = useNavigate();
  const Submit = (e)=>{
    e.preventDefault();
    axios.post("https://crud-server-lake.vercel.app/api/createUser" , {name , email , age})
    .then((result)=>{
      setUsers(result.data);
      navigate("/")
    });
  }
  return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h1>Add User</h1>
        <form onSubmit={Submit}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullname" aria-describedby="fullname" 
            onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="text" className="form-control" id="age" onChange={(e)=> setAge(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
 export default  CreateUser;
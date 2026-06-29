import {React , useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams , useNavigate} from "react-router-dom";
import axios from "axios";
function UpdateUser({setUsers}){
  const {userID} = useParams();
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [age , setAge] =useState();
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('https://crud-server-lake.vercel.app/api/getUser/'+ userID)
    .then(result => {setName(result.data.name); setEmail(result.data.email); setAge(result.data.age)})
    .catch(err => (console.log(err)));
  } , [])
  const Submit = (e)=>{
    e.preventDefault();
    axios.put("https://crud-server-lake.vercel.app/api/updateUser/"+userID , {name , email , age})
    .then((result) => {
      setUsers(result.data);
      navigate("/")
    })
    .catch(err => {console.log(err);
    }); 
  }
  return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h1>Update User</h1>
        <form onSubmit={Submit}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullname" aria-describedby="fullname" value={name}
            onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="text" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)}
/>
          </div>
        <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}
 export default  UpdateUser;
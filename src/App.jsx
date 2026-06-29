import {Routes , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Pages/Users";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";
import NotFound from "./Pages/404NotFound";
import { useState } from "react";
function App() {
   const [users , setUsers] = useState([]);
  return (
    <Routes>
      <Route index element={<Users users={users} setUsers={setUsers}/>}></Route>
      <Route path="create" element={<CreateUser setUsers={setUsers}/>}></Route>
      <Route path="update/:userID" element={<UpdateUser setUsers={setUsers}/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App

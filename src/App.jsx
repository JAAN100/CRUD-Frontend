import {Routes , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Pages/Users";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";
import NotFound from "./Pages/404NotFound";

function App() {

  return (
    <Routes>
      <Route index element={<Users />}></Route>
      <Route path="create" element={<CreateUser />}></Route>
      <Route path="update/:userID" element={<UpdateUser />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App

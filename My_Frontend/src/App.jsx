import './style/App.css'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import AddTask from './components/AddTask'
import List from './components/List'
import UpdateTask from './components/updateTasks'
import SignUp from './components/SignUp'
import Login from "./components/Login"
import Logout from "./components/Logout"

function App() {
  return (
    <>
    <NavBar/>
     <Routes>
       <Route path ='/'element={<SignUp />}></Route>
        <Route path ='/list' element={<List />}></Route>
        <Route path ='/add' element={<AddTask />}></Route>
        <Route path ='/update/:id' element={<UpdateTask />}></Route>
        <Route path ='/login'element={<Login />}></Route> 
        <Route path ='/logout'element={<Logout />}></Route> 
        
     </Routes>
    </>
  )
}

export default App;

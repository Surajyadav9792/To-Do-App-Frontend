import './style/App.css'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import AddTask from './components/AddTask'
function App() {
  return (
    <>
    <NavBar/>
     <Routes>
        <Route path ='/' element={<h1>Task List</h1>}></Route>
        <Route path ='/add' element={<AddTask />}></Route>
     </Routes>
    </>
  )
}

export default App;

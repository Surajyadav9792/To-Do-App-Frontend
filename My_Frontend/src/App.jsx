import './style/App.css'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <NavBar />
     <Routes>
        <Route path ='/' element={<h1>Task List</h1>}></Route>
        <Route path ='/add' element={<h1>Add Task</h1>}></Route>
     </Routes>
    </>
  )
}

export default App

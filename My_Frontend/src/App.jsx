import './style/App.css'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import AddTask from './components/AddTask'
import List from './components/List'
import UpdateTask from './components/updateTasks'

function App() {
  return (
    <>
    <NavBar/>
     <Routes>
        <Route path ='/' element={<List />}></Route>
        <Route path ='/add' element={<AddTask />}></Route>
         <Route path ='/update/:id' element={<UpdateTask />}></Route>
     </Routes>
    </>
  )
}

export default App;

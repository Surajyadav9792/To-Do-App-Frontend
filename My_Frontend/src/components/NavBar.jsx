import {Link} from 'react-router-dom';
import '../style/navbar.css'
function NavBar(){
    return(
        <nav id='navbar'>
           <div className='logo'>To Do App</div>
           <ul className='nav-links'>
             <li><Link to="/list">List</Link></li>
             <li><Link to="/add">Add Task</Link></li>
             <li><Link to="/logout">Logout</Link></li>
           </ul>
        </nav>
    )
}
export default NavBar;
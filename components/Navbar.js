 import { Link, NavLink } from "react-router-dom";
 const Navbar = () => {
    return (
        <>
        <ul>
            <li><NavLink  to='/' style={({isActive}) =>{return{backgroundColor: isActive ? 'aqua': ''}}}>Home</NavLink></li>
              <li> <NavLink  to='/About'  style={({isActive}) =>{return{backgroundColor: isActive ? 'aqua': ''}}}>About</NavLink></li>
                <li><NavLink to='/Contact'  style={({isActive}) =>{return{backgroundColor: isActive ? 'aqua': ''}}}>Contact</NavLink> </li>
        
          
        </ul>
        </>
    )
}
export default Navbar ;
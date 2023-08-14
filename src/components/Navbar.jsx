// import { Link } from 'react-router-dom'
// import { FcLibrary } from "react-icons/fc";
import logo from '../images/Logo.svg'


export const Navbar = () => {
  return (
    <div className='navHeader'>
      <ul>
        <li><p>About Us</p></li>
        <li><p>What We Do</p></li>
        <img src={logo} alt="logo" className='logo'/>
        <li><p>App Features</p></li>
        <li><p>Contact Us</p></li>
      </ul>

    </div>
  );
}

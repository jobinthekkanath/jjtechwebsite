import React,{ useState } from "react";
import './Header.css';
import logo from '../../assets/img/logoj.png'
import { Link } from "react-router-dom";

function Header() {

  const [showMenu, setShowMenu] = useState(false);

    const nav_titles=[{
        path:'/', display:'Home'
    },
    {
        path:'/services', display:'Services'
    },
    {
        path:'/courses', display:'Courses'
    },
    {
        path:'/aboutus', display:'About Us'
    }]


    const toggleMenu = () => {
      setShowMenu(!showMenu);
  }
  const handleMenuItemClick = () => {
    setShowMenu(false); 
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo-img">
                <img src={logo} alt="no logo"/>
            </div>
            <h2>JJtech Solutions</h2>
          </div>
          <div className="toggle-button" onClick={toggleMenu}>
            &#9776; 
          </div>
          <div className={`navigation ${showMenu ? 'show' : ''}`}>
            <ul className="menu">
                {
                    nav_titles.map((item)=>(
                        <li className="menu_items" onClick={handleMenuItemClick} ><Link to={item.path}>{item.display}</Link></li>
                    ))
                }
                
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import  { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  // State to handle menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="name-head">
          <h1>Meraj Qureshi</h1>
        </div>
        
        {/* Hamburger Icon for small screens */}
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
        {/* Nav links */}
        <div className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <ul className='nav-list-1'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/skill'>Skill</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

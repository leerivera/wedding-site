import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' /> */}
            
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/details' className='nav-links' onClick={closeMobileMenu}>
                Details
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href="https://nikos082021.surveysparrow.com/s/Akosua-and-Nicholas-Wedding-RSVP/tt-7aa0a2"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                RSVP
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="https://www.honeyfund.com/wedding/baah-dwomoh-rivera-08-21-2021"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Registry
              </a>
              
            </li>
            <li className='nav-item'>
              <Link
                to='/cards'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
              
            </li>

            <li>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

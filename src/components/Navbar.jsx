import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal'

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };


  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo/original.png" alt="" />
      </div>

      {isMobile ? (
        <div className='hello'>
          <div className="ham">
            <label class="hamburger ham">
              <input className="checkbox-class" type="checkbox" checked={isMenuOpen} readOnly onClick={handleMenuToggle} />
              <svg viewBox="0 0 32 32">
                <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div key={isMenuOpen ? 'menu-open' : 'menu-closed'} className={'fullnav-mob'} data-visible="true"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '70vw' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Fade direction='up'>
                <div className="nav-menu">
                  <ul type="none" className="list">
                    <li>
                      {/* <NavLink onClick={handleMenuToggle} to="/" className="link"> */}
                      Home
                      {/* </NavLink> */}
                    </li>
                    <li>
                      {/* <NavLink onClick={handleMenuToggle} to="/about" className="link"> */}
                      About
                      {/* </NavLink> */}
                    </li>
                    <li>
                      {/* <NavLink onClick={handleMenuToggle} to="/contact" className="link"> */}
                      Contact
                      {/* </NavLink> */}
                    </li>
                  </ul>
                </div>
                </Fade>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Fade direction='right'>
          <div className="nav-menu">
            <ul type="none" className="list">
              <li>
                {/* <NavLink to="/" className="link"> */}
                Home
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to="/about" className="link"> */}
                About
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to="/contact" className="link"> */}
                Contact
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Navbar;

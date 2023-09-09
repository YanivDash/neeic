import { useState } from "react";
import "../STYLES/navbar/navbar.css";
import Logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { IoMdContact } from "react-icons/io";
import { RiReservedFill } from "react-icons/ri";

import { AiTwotoneHome } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function disableScrolling() {
    document.body.style.overflow = "hidden";
    console.log(scrollY);
  }
  function enableScrolling() {
    document.body.style.overflow = "visible";
  }

  window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar_sticky", window.scrollY > 50);
    navbar.classList.toggle("navbar_absolute", window.scrollY < 50);
  });

  if (menu) {
    disableScrolling();
  } else {
    enableScrolling();
  }
  return (
    <motion.div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='navbar-right'>
          <ul className='navbar-right-links'>
            <Link to='/'>
              <li
                className='navbar-link-item'
                onClick={() => window.scrollTo(0, 0)}
              >
                <AiTwotoneHome className='navbar-icon' /> <span>Home</span>
              </li>
            </Link>
            <Link to='/services'>
              <li
                className='navbar-link-item'
                onClick={() => window.scrollTo(0, 0)}
              >
                <RiReservedFill className='navbar-icon' />

                <span>Services</span>
              </li>
            </Link>
            <a href='#contact'>
              <li className='navbar-link-item'>
                <IoMdContact className='navbar-icon' /> <span>Contact-us</span>
              </li>
            </a>
          </ul>
        </div>
        <div className='navbar-mobile'>
          <IoIosArrowDroprightCircle
            id={`${menu ? "menu-left" : "menu-right"}`}
            className='navbar-icon'
            onClick={() => setMenu(!menu)}
          />
        </div>
      </div>
      <div
        className={`${
          menu
            ? "navbar-mobile-show mobile-nav"
            : "mobile-nav navbar-mobile-hide "
        }`}
      >
        <ul className='navbar-mobile-links'>
          <Link to='/'>
            <li
              className='navbar-link-item'
              onClick={() => {
                window.scrollTo(0, 0);
                setMenu(false);
              }}
            >
              <AiTwotoneHome className='navbar-icon' /> <span>Home</span>
            </li>
          </Link>
          <Link to='/services'>
            <li
              className='navbar-link-item'
              onClick={() => {
                window.scrollTo(0, 0);
                setMenu(false);
              }}
            >
              <RiReservedFill className='navbar-icon' />
              <span>Services</span>
            </li>
          </Link>
          <a
            href='#contact'
            onClick={() => {
              setMenu(false);
            }}
          >
            <li className='navbar-link-item'>
              <IoMdContact className='navbar-icon' /> <span>Contact-us</span>
            </li>
          </a>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;

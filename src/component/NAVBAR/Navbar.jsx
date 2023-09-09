import { useState } from "react";
import "../STYLES/navbar/navbar.css";
import Logo from "../../assets/logo.svg";
import { motion, useScroll } from "framer-motion";
import { IoMdContact } from "react-icons/io";
import { RiReservedFill } from "react-icons/ri";
import { BiSolidInfoCircle } from "react-icons/bi";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { scrollY } = useScroll();

  function disableScrolling() {
    document.body.style.overflow = "hidden";
    console.log(scrollY);
  }
  function enableScrolling() {
    document.body.style.overflow = "visible";
  }

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
            <li className='navbar-link-item'>
              <RiReservedFill className='navbar-icon' />
              <span>Services</span>
            </li>
            <li className='navbar-link-item'>
              <BiSolidInfoCircle className='navbar-icon' />{" "}
              <span>About us</span>
            </li>
            <li className='navbar-link-item'>
              <IoMdContact className='navbar-icon' /> <span>Contact-us</span>
            </li>
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
      <div className='mobile-nav'>
        <div
          className={`${menu ? "navbar-mobile-show" : "navbar-mobile-hide"}`}
        >
          <ul className='navbar-mobile-links'>
            <li className='navbar-link-item'>
              <RiReservedFill className='navbar-icon' />
              <span>Services</span>
            </li>
            <li className='navbar-link-item'>
              <BiSolidInfoCircle className='navbar-icon' />{" "}
              <span>About us</span>
            </li>
            <li className='navbar-link-item'>
              <IoMdContact className='navbar-icon' /> <span>Contact-us</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

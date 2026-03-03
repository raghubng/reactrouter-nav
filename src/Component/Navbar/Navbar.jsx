import React, { useState } from 'react';
import '../Navbar.css';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';

const Navbar = () => {
    const[Active,setActive] = useState("nav__list");
    const[toggleIcon,settoggleIcon] = useState("nav_toggler");
    const navToggle = () => {
        Active === "nav__list" ? setActive("nav__list nav_active") : setActive("nav__list");
        toggleIcon === "nav_toggler" ? settoggleIcon("nav_toggler toggler") : settoggleIcon("nav_toggler");
    };
  return (
    <Router>
    <nav className="nav">
        <a className="brand" href="#">Logo</a>
        <ul className={Active}>
            <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
            <li className="nav__item"><NavLink to='/About'>about</NavLink></li>
            <li className="nav__item"><NavLink to='/service'>Service</NavLink></li>
            <li className="nav__item"><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="toggler line1"></div>
            <div className="toggler line2"></div>
            <div className="toggler line3"></div>
        </div>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
  );
}

export default Navbar;

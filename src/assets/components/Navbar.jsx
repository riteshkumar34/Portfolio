import React, { useState } from 'react';
import pic from '../../../src/Photo.jpg';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-left">
          <img src={pic} className="profile-pic" alt="profile" />
          <h1 className="brand-name">
            Ritesh
            <p className="brand-subtitle">Web Developer</p>
          </h1>
        </div>

        <ul className="navbar-links">
          <li className="nav-link">
            <Link to="home" smooth={true} duration={500} offset={-70} activeClass='active'>
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="about" smooth={true} duration={500} offset={-70} activeClass='active'>
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link to="Projects" smooth={true} duration={500} offset={-70} activeClass='active'>
              Projects
            </Link>
          </li>
          <li className="nav-link">
            <Link to="experience" smooth={true} duration={500} offset={-70} activeClass='active'>
              Experience
            </Link>
          </li>
          <li className="nav-link">
            <Link to="contacts" smooth={true} duration={500} offset={-70} activeClass='active'>
              Contacts
            </Link>
          </li>
        </ul>

        <div className="burger-icon" onClick={() => setMenu(!menu)}>
          <CiMenuBurger size={25} />
        </div>
      </div>

      {menu && (
        <ul className="mobile-menu">
          <li className="nav-link">
            <Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link to="Projects" smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-link">
            <Link to="experience" smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>
              Experience
            </Link>
          </li>
          <li className="nav-link">
            <Link to="contacts" smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>
              Contacts
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

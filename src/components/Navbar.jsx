import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-glass fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-light" href="#">
          Benediktus <span className="accent">Junior Developer</span>
        </a>

        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

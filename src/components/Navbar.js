import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar bg-${props.mode} border-bottom border-body`}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            {/* <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
            {/* <div className="navbar-collapse collapse" id="navbarNav"> */}
            <a
              className="nav-link active fs-6 me-3"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            {/* <a className="nav-link fs-6 " href="/about">
              {props.aboutText}
            </a> */}
          </div>
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>
          </ul> */}
          {/* </div> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Dark" : "Light"} mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};

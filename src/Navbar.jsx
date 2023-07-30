import React from "react";
import reactLogo from "./assets/react.svg";

import { FaTwitter, FaBars } from "react-icons/fa"; // Assuming "fa" is the correct package for the FontAwesome icons

import "./App.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={reactLogo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

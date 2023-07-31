import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

import { FaTwitter, FaBars } from "react-icons/fa";
import Links from "./Data";

import "./App.css";

function Navbar() {
  const [shown, SetShown] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={reactLogo} alt="logo" />
          <button className="nav-toggle" onClick={() => SetShown(true)}>
            <FaBars />
          </button>
        </div>
        {shown && (
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
        )}
      </div>
      <ul>
        {Links.map((links) => {
          const { id, url, text } = links;
          return (
            <li key={id}>
              <a>{url}</a>
              {text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

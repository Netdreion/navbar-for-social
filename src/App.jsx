import { useState } from "react";

import "./App.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header"></div>
        <div className="links-container show-container"></div>
        <ul className='="social-icons'></ul>
      </div>
    </nav>
  );
}

export default Navbar;

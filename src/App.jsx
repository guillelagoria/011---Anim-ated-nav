import { useState } from "react";
import "./App.css";

import React from "react";

export const App = () => {
  const [active, setActive] = useState(true);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <body>
        <nav className={active ? "active" : ""}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <button className="icon" onClick={toggleActive}>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </button>
        </nav>
      </body>
    </>
  );
};

export default App;

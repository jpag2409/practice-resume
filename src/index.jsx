import React from "react";
import ReactDOM from "react-dom";

import "./component/index.css";
// Components
import About from "./component/about.js";
import Home from "./component/home.js";
import LeftContent from "./component/leftContent.js";
import RightContent from "./component/rightContent.js";

function Main() {
  return (
    <div className="container">
      <div className="parent">
        <Home />
        <About />
        <div className="main">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Main />, document.querySelector("#root"));

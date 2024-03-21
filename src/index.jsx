import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import React from "react";

const entryPoint = document.getElementById("root"); 
ReactDOM.createRoot(entryPoint).render(React.createElement(App));

//we can create elemnts without jsx ,withot jsx we dont need build procedure ,but its convenient and way to use jsx in our projects

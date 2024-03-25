import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

//we can create elemnts without jsx ,withot jsx we dont need build procedure ,but its convenient and way to use jsx in our projects

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";

import HoverCardDemo from "./components/card/card.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NavBar>
      <HoverCardDemo> */}
    <App />
    {/* </HoverCardDemo>
    </NavBar> */}
  </React.StrictMode>
);

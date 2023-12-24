import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapper from "../context/ContextWrapper.jsx";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);

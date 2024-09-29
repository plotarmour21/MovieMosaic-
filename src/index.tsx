import React from "react";
import ReactDOM from "react-dom/client"; // Update this import
import "./index.css";
import App from "./App";

// Create a root element using createRoot
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement); // Create root

// Render the App using the new root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

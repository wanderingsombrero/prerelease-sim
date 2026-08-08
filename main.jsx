import React from "react";
import ReactDOM from "react-dom/client";
import PrereleaseSim from "./PrereleaseSim.jsx";

// No CSS imports on purpose — PrereleaseSim.jsx styles itself, and Vite's
// default index.css sets a centered flex body that fights the layout.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrereleaseSim />
  </React.StrictMode>
);

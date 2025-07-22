import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
const anotherelement = (
  <a href="https://www.example.com" target="_blank">
    Click Here
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.example.com",
    target: "_blank",
  },
  "Click Here"
);
createRoot(document.getElementById("root")).render(<App />);

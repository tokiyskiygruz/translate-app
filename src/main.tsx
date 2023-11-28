import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./fonts/Nunito/Nunito-Bold.ttf";
import "./fonts/Nunito/Nunito-Medium.ttf";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

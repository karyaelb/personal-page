import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import App from "./components/App";
import Dynahunt from "./components/project/Dynahunt";
import Indiealuminium from "./components/project/Indiealuminium";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dynahunt" element={<Dynahunt />} />
        <Route path="/indiealuminium" element={<Indiealuminium />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

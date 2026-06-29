import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Footer from "./componets/footer/Footer";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,
);

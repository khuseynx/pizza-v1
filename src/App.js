import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Home from "./pages/Home";
import Korzina from "./pages/Korzina";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/korzina" element={<Korzina />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

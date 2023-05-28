import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Home from "./pages/Home";
import Korzina from "./pages/Korzina";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

export const mySearchContext = React.createContext();

function App() {
  const [valueOfSearch, setValueOfSearch] = React.useState("");

  return (
    <div className="wrapper">
      <mySearchContext.Provider value={{ valueOfSearch, setValueOfSearch }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/korzina" element={<Korzina />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </mySearchContext.Provider>
    </div>
  );
}

export default App;

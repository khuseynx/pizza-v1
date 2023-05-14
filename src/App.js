import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Home from "./pages/Home";
import Korzina from "./pages/Korzina";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  const [valueOfSearch, setValueOfSearch] = React.useState("");
  return (
    <div className="wrapper">
      <Header
        valueOfSearch={valueOfSearch}
        setValueOfSearch={setValueOfSearch}
      />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                valueOfSearch={valueOfSearch}
                setValueOfSearch={setValueOfSearch}
              />
            }
          />
          <Route path="/korzina" element={<Korzina />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

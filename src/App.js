import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";
import { Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import Home from "./pages/Home";
import Korzina from "./pages/Korzina";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

export const mySearchContext = React.createContext();

function App() {
  const [valueOfSearch, setValueOfSearch] = React.useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      ></button>

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

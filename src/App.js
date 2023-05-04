import React from "react";

import Header from "./sections/Header";
import Categories from "./sections/Categories";
import Sort from "./sections/Sort";
import PizzaBlock from "./sections/PizzaBlock";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

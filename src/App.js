import React from "react";

import Header from "./sections/Header";
import Categories from "./sections/Categories";
import Sort from "./sections/Sort";
import PizzaBlock from "./sections/PizzaBlock";
import "./scss/app.scss";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={499} />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

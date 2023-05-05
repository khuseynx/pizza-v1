import React from "react";

import Header from "./sections/Header";
import Categories from "./sections/Categories";
import Sort from "./sections/Sort";
import PizzaBlock from "./sections/PizzaBlock";
import "./scss/app.scss";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6455553bf803f3457640a60f.mockapi.io/data")
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
        console.log("array of my pizzas:", array);
      });
  }, []);

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

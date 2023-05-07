import React from "react";

import Categories from "../sections/Categories";
import Sort from "../sections/Sort";
import PizzaBlock from "../sections/PizzaBlock/index";
import Skeleton from "../sections/PizzaBlock/Skeleton";

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [pageIsLoading, setPageIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6455553bf803f3457640a60f.mockapi.io/data")
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
        setPageIsLoading(false);
        console.log("array of my pizzas:", array);
      });
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pageIsLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
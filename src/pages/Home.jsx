import React from "react";

import Categories from '../sections/Categories';
import Sort from "../sections/Sort";
import PizzaBlock from "../sections/PizzaBlock/index";
import Skeleton from "../sections/PizzaBlock/Skeleton";

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [pageIsLoading, setPageIsLoading] = React.useState(true);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [sortGroup, setSortGroup] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {

  const order = sortGroup.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortGroup.sortProperty.replace('-','');
  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  setPageIsLoading(true);

    fetch(
      `https://6455553bf803f3457640a60f.mockapi.io/data?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
        setPageIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, sortGroup]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryIndex}
          OnClickCategory={(i) => setCategoryIndex(i)}
        />
        <Sort
         value={sortGroup} 
         clickOnSort={(i) => setSortGroup(i)} />
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

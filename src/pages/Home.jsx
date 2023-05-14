import React from "react";

import Categories from '../sections/Categories';
import Sort from "../sections/Sort";
import PizzaBlock from "../sections/PizzaBlock/index";
import Skeleton from "../sections/PizzaBlock/Skeleton";
import Pagination from "../sections/Pagination";

const Home = ({valueOfSearch}) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [pageIsLoading, setPageIsLoading] = React.useState(true);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortGroup, setSortGroup] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {

  const order = sortGroup.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortGroup.sortProperty.replace('-','');
  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  const search = valueOfSearch ? `&search=${valueOfSearch}` : '';
  setPageIsLoading(true);

    fetch(
      `https://6455553bf803f3457640a60f.mockapi.io/data?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
        setPageIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, sortGroup, valueOfSearch, currentPage]);

  const pizzasItems = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  
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
          ? skeletons
          : pizzasItems}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;

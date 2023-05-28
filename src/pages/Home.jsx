import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {setCategoryIndex} from '../redux/slices/filterSlice';
import Categories from '../sections/Categories';
import Sort from "../sections/Sort";
import PizzaBlock from "../sections/PizzaBlock/index";
import Skeleton from "../sections/PizzaBlock/Skeleton";
import Pagination from "../sections/Pagination";
import { mySearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const {categoryIndex, sort} = useSelector((state) => state.filter);


  const {valueOfSearch} = React.useContext(mySearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [pageIsLoading, setPageIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
 

  const OnClickCategory = (id) => {
    dispatch(setCategoryIndex(id));
  };

  React.useEffect(() => {
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sort.sortProperty.replace('-','');
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
  }, [categoryIndex, sort.sortProperty, valueOfSearch, currentPage]);

  const pizzasItems = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryIndex}
          OnClickCategory={OnClickCategory}
        />
        <Sort/>
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

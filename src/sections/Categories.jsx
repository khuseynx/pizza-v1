import React from "react";

function Categories({value, OnClickCategory}) {
  
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
        <li
          key={i}
          onClick={() => OnClickCategory(i)}
          className={value === i ? "active" : ""}
        >
          {categoryName}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

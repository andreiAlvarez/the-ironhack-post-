import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesBar(props) {
  const categories = [
    "technology",
    "sports",
    "science",
    "health",
    "entertainment",
    "business",
  ];
  
  return (
    <div className="main-menu">
      {categories.map((category, index) => {
        return (
          <Link key={index} to={`/category/${category}`}>
            <h4 className="category-alone">{category}</h4>
          </Link>
        );
      })}
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import headerImage from "../images/No_image_available.png";

export function Headline({ data }) {
  console.log(data);
  
  return (
    <div className="news__headlines">
      <div>
        <img className="headlines__image"  src={data.urlToImage ? data.urlToImage : headerImage} alt="new"></img>
      </div>
      <div className="news__everything__headlines">
        <Link to={`/details/${slugify(data.title)}`}>
          <h1 className="news__title__head">{data.title}</h1>
        </Link>
        <p className="news__desc__head">{data.description}</p>
        <span className="news__author__head">{data.author}</span> <br />
        <span className="news__source__head">{data.source.name}</span>
      </div>
    </div>
  );
}

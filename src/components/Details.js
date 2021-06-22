import React from "react";
import slugify from "slugify";
import headerImage from "../images/No_image_available.png";

export default function Details({ match, history, location, setSelectedNews }) {
  const data = require("../data.json");
  console.log(data, history, location);
  const param = slugify(match.params.url);

  const news = data?.find((n) => slugify(n.title) === param);
  let linkedHandle = news?.url;
  return (
    <div>
      <article className="details">
        <h1 className="details__title">{news?.title}</h1>
        <p className="details__desc">{news?.description}</p>
        <img
          className="news__image"
          src={news?.urlToImage ? news?.urlToImage : headerImage}
          alt="new"
        ></img>
        <span className="details__author">{news?.author}</span> <br />
        <div className="details__content">{news?.content}</div>
        <a href={linkedHandle} target="_blank" rel="noopener noreferrer">
          See Original Source
        </a>
      </article>
    </div>
  );
}

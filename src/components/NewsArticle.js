import React from "react";
import headerImage from "../images/No_image_available.png";
import Moment from "react-moment";

function NewsArticle({ data, setSelectedNews, history }) {
  console.log(data);

  let linkedHandle = data?.url;

  return (
    <div className="news">
      <div className="headlines__date">
        <span className="news__published">
          <Moment format="YYYY/MM/DD">{data.publishedAt}</Moment>
        </span>
      </div>
      <div className="news-everything">
        <a href={linkedHandle} target="_blank" rel="noopener noreferrer">
          <h1 className="news__title">{data.title}</h1>
        </a>
        <p className="news__desc">{data.description}</p>
        <span className="news__author">{data.author}</span> <br />
        <span className="news__source">{data.source.name}</span>
      </div>
      <div className="news__list__image">
        <img
          className="news__image"
          src={data.urlToImage ? data.urlToImage : headerImage}
          alt="new"
        ></img>
      </div>
    </div>
  );
}

export default NewsArticle;

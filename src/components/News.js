import { Headline } from "./Headline";

function News(props) {
  const data = require("../data.json");
  console.log(data);

  return (
    <div>
      {/* <CategoriesBar /> */}
      <div className="all__news">
        {data
          ? data.map(
              (news) =>
                news.source.name !== "Google News" && (
                  <Headline data={news} key={news.url} />
                )
            )
          : "Loading"}
        <hr className="cover-lines"></hr>
      </div>
    </div>
  );
}

export default News;

import React, { useState } from "react";
import ArticleShort from "../Sub/ArticleShort";
import ArticleDetailed from "../Sub/ArticleDetailed";
import techdata from "../../api/TechApi.js";

const Home = () => {
  document.title = "Tech React";
  const [articles] = useState(techdata.articles);
  const [selectedArticle, setselectedArticle] = useState(null);
  const clicked = (index) => {
    setselectedArticle(articles[index]);
    console.log(articles[index]);
  };
  const article = articles.map((article, index) => {
    return (
      <div key={index} onClick={() => clicked(index)}>
        <ArticleShort article={article} />
      </div>
    );
  });
  return (
    <div className="home_container">
      <div className="ArticleShort_container">{article}</div>
      <div>
        {selectedArticle ? (
          <ArticleDetailed selectedArticle={selectedArticle} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Articles = ({ articles = [] }) => {
  // const getArticles = async () => {
  //   const url = "http://127.0.0.1:3001/articles";
  //   await fetch(url).then(async (res) => {
  //     const data = await res.json();
  //     onArticlesLoaded(data.articles);
  //   });
  // };

  // useEffect(() => {
  //   if (!articles.length) {
  //     getArticles();
  //   }
  // }, [articles]);

  return (
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {articles.map((article) => (
        <Link key={article.id} component="li" to={`/articles/${article.id}`}>
          <span>{article.id}: </span>
          <span>{article.title}</span>
        </Link>
      ))}
    </ul>
  );
};

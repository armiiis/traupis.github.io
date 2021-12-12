import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Article = ({ articles, paths, onGetArticles, onGetPaths }) => {
  const { id } = useParams();
  // const [article, setArticle] = useState();
  const [article, setArticle] = useState();

  useEffect(() => {
    if (!articles.length) {
      onGetArticles();
    }
  }, [articles]);

  useEffect(() => {
    if (!article) {
      const found = articles.find((el) => el.id === id);
      setArticle(found);
    }
  }, [article, articles]);

  useEffect(() => {
    if (!paths.length) {
      onGetPaths();
    }
  }, [article]);

  if (!article) {
    return <div>loading...</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h1>{article.title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: article.introtext.replaceAll("{mosimage}", ""),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: article.fulltext.replaceAll("{mosimage}", ""),
        }}
      />

      {article?.imagesFormatted.map((image) => {
        const match = paths.find((path) => path.includes(image.path));
        if (!match) {
          return <div>img not found</div>;
        }
        return (
          <div style={{ textAlign: "center" }}>
            <img src={`${process.env.PUBLIC_URL}/${match}`} />
          </div>
        );
      })}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// need to handle multiple gallery in one article (located in .introtext)
// and insert in corresponding html?
const getGalleryPath = (article) => {
  const str = article?.fulltext || "";
  return str.substring(
    str.indexOf("{gallery}") + "{gallery}".length,
    str.lastIndexOf("{/gallery}")
  );
};

const getGalleryPaths = (gallery = null, paths) => {
  if (!gallery) {
    return [];
  }

  if (gallery) {
    return paths.filter((el) => el.includes(gallery));
  }

  return [];
};

const cleanupHtml = (str, gallery = "") =>
  str
    .replaceAll("{mosimage}", "")
    .replaceAll("{gallery}", "")
    .replaceAll("{/gallery}", "")
    .replaceAll(gallery, "");

export const Article = ({ articles, paths, onGetArticles, onGetPaths }) => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [galleryPath, setGalleryPath] = useState();

  useEffect(() => {
    if (!articles.length) {
      onGetArticles();
    }
  }, [articles]);

  useEffect(() => {
    if (!article) {
      const found = articles.find((el) => el.id === id);
      setArticle(found);
      const hasGallery = getGalleryPath(found);
      if (hasGallery) {
        setGalleryPath(hasGallery);
      }
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
          __html: cleanupHtml(article.introtext, galleryPath),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: cleanupHtml(article.fulltext, galleryPath),
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

      {getGalleryPaths(galleryPath, paths).map((path) => {
        return (
          <div style={{ textAlign: "center" }}>
            <img src={`${process.env.PUBLIC_URL}/${path}`} />
          </div>
        );
      })}
    </div>
  );
};

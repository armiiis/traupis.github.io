import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import articlesJson from "./assets/output.json";
import pathsJson from "./assets/paths.json";
import { useEffect, useState } from "react";
import { Articles } from "./Views/Articles/Articles";
import { Article } from "./Views/Article/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [paths, setPaths] = useState([]);

  const getPaths = () => {
    const loadData = JSON.parse(JSON.stringify(pathsJson));
    setPaths(loadData.paths);
  };

  const getArticles = () => {
    const loadData = JSON.parse(JSON.stringify(articlesJson));
    setArticles(loadData);
  };

  useEffect(() => {
    if (!articles.length) {
      getArticles();
    }
  }, [articles]);

  useEffect(() => {
    if (!paths.length) {
      getPaths();
    }
  }, [paths]);

  return (
    <Routes>
      <Route
        exact
        path="/articles"
        element={<Articles articles={articles} />}
      />
      <Route
        exact
        path="/articles/:id"
        element={
          <Article
            articles={articles}
            paths={paths}
            onGetArticles={getArticles}
            onGetPaths={getPaths}
          />
        }
      />
      <Route path="/" element={<Navigate replace to="/articles" />} />
    </Routes>
  );
}

export default App;

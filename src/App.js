import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import jsonData from "./assets/output.json";
import {useEffect, useState} from "react";
import {Articles} from "./Views/Articles/Articles";
import {Article} from "./Views/Article/Article";

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const loadData = JSON.parse(JSON.stringify(jsonData));
    setArticles(loadData)
  }, []);

  return (
    <Routes>
      <Route exact path="/articles" element={<Articles articles={articles} />} />
      <Route exact path="/articles/:id" element={<Article />} />
      <Route path="/" element={<Navigate replace to="/articles" />} />
    </Routes>
  );
}

export default App;

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

const Articles = () => {
  return <div>articles</div>;
};

const Article = () => {
  return <div>article</div>;
};

function App() {
  return (
    <Routes>
      <Route exact path="/articles" element={<Articles />} />
      <Route exact path="/articles/:id" element={<Article />} />
      <Route path="/" element={<Navigate replace to="/articles" />} />
    </Routes>
  );
}

export default App;

import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Articles = ({ articles = [] }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Traupis.lt archyvas</h1>
      <div style={{ textAlign: "center", padding: 10 }}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          value={search}
          style={{ padding: 4, fontSize: 20 }}
          placeholder="Paieška"
        />
      </div>

      <ul style={{ display: "flex", flexDirection: "column" }}>
        {articles
          .filter((article) => article.title.includes(search))
          .map((article) => (
            <Link
              key={article.id}
              component="li"
              to={`/articles/${article.id}`}
            >
              <span>{article.id}: </span>
              <span>{article.title}</span>
            </Link>
          ))}
      </ul>
    </div>
  );
};

import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Articles = ({ articles = [] }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div style={{ padding: 10, margin: "10px 0 0 35px" }}>
        <label htmlFor="search">PAIEŠKA: </label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          value={search}
          style={{ padding: 10 }}
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

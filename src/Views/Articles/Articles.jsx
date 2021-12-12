import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const Articles = ({ articles = [] }) => {
  const [search, setSearch] = useState("");

  const sorted = useMemo(
    () =>
      articles.sort((a, b) => {
        const format = (str) => str.title.toUpperCase();

        return format(a).localeCompare(format(b));
      }),
    [articles]
  );

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
        {sorted
          .filter((article) =>
            article.title.toUpperCase().includes(search.toUpperCase())
          )
          .map((article) => (
            <Link
              key={article.id}
              component="li"
              to={`/articles/${article.id}`}
            >
              <span>{article.title}</span>
              <span style={{ paddingLeft: 10, opacity: 0.3 }}>
                ({article.id})
              </span>
            </Link>
          ))}
      </ul>
    </div>
  );
};

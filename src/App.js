import "./App.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./Component/Card";
import fetchNews from "./hook/fetchNews";

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, news } = fetchNews(page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="App">
      <div className={"bg-gray-800 h-screen overflow-y-auto"}>
        <div
          className={
            "z-50 bg-gray-200 px-5 py-3 text-center md:text-left uppercase w-full fixed top-0"
          }
        >
          <div className={"container mx-auto"}>
            <h2 className={"font-mono text-2xl font-semibold text-gray-800"}>
              Popular Feeds
            </h2>
          </div>
        </div>
        <div className={"container mx-auto py-14 bg-gray-800"}>
          <div
            className={
              "grid gap-5 grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            }
          >
            {news.map((e, i) => (
              <Card key={i} item={e} />
            ))}
          </div>
          {loading && (
            <div className={"grid place-content-center w-full mt-8"}>
              <img
                className={"h-10"}
                src={"/img/loading.gif"}
                alt={"loading"}
              />
            </div>
          )}
          {error && <div></div>}
          <div ref={loader} />
        </div>
      </div>
    </div>
  );
}

export default App;

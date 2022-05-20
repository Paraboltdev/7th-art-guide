import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchCard } from "./SearchCard";
import { peticion } from "./utils/peticion";
import "./searchPage.css";
import { SeriesCard } from "./SeriesCard";

export function SearchPage() {
  const [searchPage, setSearchPage] = useState([]);

  const [info, setInfo] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");
  
  useEffect(() => {
    peticion("/search/multi?query=" + search).then((data) => {
     
      setSearchPage(data.results);
    });
  }, [search]);

  return (
    <div>
      <div>
        <h1 className="header">Peliculas</h1>
       
        <ul className="search_container">
          {searchPage
            .filter((item) => item.media_type === "movie")
            .map((search) => (
              <SearchCard key={search.id} search={search} movie={search} />
            ))}
        </ul>
      </div>

      <div>
        <h1 className="header">Series</h1>
        <ul className="search_container">
          {searchPage
            .filter((item) => item.media_type === "tv")
            .map((search) => (
              <SeriesCard key={search.id} search={search} serie={search} />
            ))}
        </ul>
      </div>
    </div>
  );
}

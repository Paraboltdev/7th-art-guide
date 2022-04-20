import React, { useState, useEffect, Fragment } from "react";
import { SeriesCard } from "./SeriesCard";
import "./seriesGrid.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "./Spinner";
import { peticion } from "./utils/peticion";
import { SelectByLeter } from "./SelectByLeter";

export function SeriesGrid() {
  const [series, setSeries] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const apiKey = process.env.REACT_APP_TMDB_KEY;

  useEffect(() => {
    peticion("/discover/tv?page=" + page + "&language=es-ES").then((data) => {
      console.log(data);
      setSeries((prevSeries) => prevSeries.concat(data.results));
      setHasMore(data.page < data.total_pages);
    });
  }, [page]);
  const imagenUrl = "https://image.tmdb.org/t/p/w500/" + series.poster_path;
  return (
    <>
      <h1 className="header_series">Series</h1>

      <InfiniteScroll
        dataLength={series.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={setHasMore}
        loader={<Spinner />}
      >
        <ul className="series_grid">
          {series.map((serie) => (
            <SeriesCard key={serie.id} serie={serie} />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}

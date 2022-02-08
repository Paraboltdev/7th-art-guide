import React, { useEffect, useState } from "react";
import { peticion } from "./utils/peticion";
import "./seriesGrid.css";
import { Cards } from "./Cards";
import { SeriesCard } from "./SeriesCard";

export function LatestList() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    peticion("/discover/movie").then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  useEffect(() => {
    peticion("/discover/tv").then((data) => {
      console.log(data);
      setSeries(data.results);
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="header">Movies</h1>
        <ul className="series_grid">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>

      <div>
        <h1 className="header">Series</h1>

        <ul className="series_grid">
          {series.map((serie) => (
            <SeriesCard key={serie.id} serie={serie} />
          ))}
        </ul>
      </div>
    </>
  );
}

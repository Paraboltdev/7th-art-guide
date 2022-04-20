import React, { Fragment, useEffect, useState } from "react";
import { Caratulas } from "./Caratulas";
import style from "./Lista.module.css";
import { Spinner } from "./Spinner";
import { peticion } from "./utils/peticion";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation, useSearchParams } from "react-router-dom";
import { SelectByLeter } from "./SelectByLeter";

export function ListaPeliculas() {
  const [movies, setMovies] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    setCargando(true);

    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page + "&language=es-ES"
      : "/discover/movie?page=" + page + "&language=es-ES";
    peticion(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      console.log(movies);
      setHasMore(data.page < data.total_pages);
      setCargando(false);
      console.log(data);
    });
  }, [search, page]);

  if (movies.length === 0) {
    return <h2>No hay resultados para su busqueda</h2>;
  }

  return (
    <Fragment>
      <h1 className={style.header_movie}>Peliculas</h1>

      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Spinner />}
      >
        <ul className={style.moviesGrid}>
          {movies.map((movie) => (
            <Caratulas key={movie.id} peli={movie} />
          ))}
        </ul>
      </InfiniteScroll>
    </Fragment>
  );
}

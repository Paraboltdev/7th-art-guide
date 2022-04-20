import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Spinner } from "./Spinner";
import noImage from "../assets/img/no-image.png";
import style from "./Detalles.module.css";

import { peticion } from "./utils/peticion";
import { AiFillStar } from "react-icons/ai";

export function Detalles() {
  const { movieId } = useParams();
  console.log(movieId);
  const [cargando, setCargando] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setCargando(true);
    peticion("/movie/" + movieId).then((data) => {
      console.log(data);
      setCargando(false);
      setMovie(data);
    });
  }, [movieId]);

  if (cargando) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const year = movie.release_date ? movie.release_date.slice(0, 4) : " Unknown";
  console.log(year);
  const imagenUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : noImage;
  const backdropImg = movie.backdrop_path
    ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
    : noImage;
  return (
    <div className={style.main_div}>
      <div className={style.title}>
        <h2>{movie.title}</h2>
      </div>
      <div className={style.container}>
        <div className={style.detallesContenedor}>
          <img
            className={`${style.peliimg} ${style.columnas}`}
            src={imagenUrl}
            alt={movie.title}
          />
          <div>
            <p>
              Official Site:{" "}
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                {movie.homepage}
              </a>{" "}
            </p>
          </div>
        </div>
        <div className={style.columnas}>
         

          <p> {movie.overview} </p>
        </div>
        <div className={style.info_div}>
          <h4>Información:</h4>
          <p>
            <strong>Duración: </strong>
            {movie.runtime ? movie.runtime + "minutos" : "Unknown"}
          </p>
          <p>
            <strong>Año: </strong> {year ? year : "Unknown"}{" "}
          </p>
          <p>
            <strong>Estreno: </strong>{" "}
            {movie.release_date ? movie.release_date : " Unknown"}
          </p>
          <p>
            <strong>Genero:</strong>{" "}
            {movie.genres
              ? movie.genres.map((genre) => genre.name).join(" , ")
              : "Unknown"}
          </p>

          <div className={style.p_rating}>
            <p className="p_rating">
              <h5>Calificacion: </h5>
              <AiFillStar size={30} />
              <AiFillStar size={30} />
              <AiFillStar size={30} />
              <AiFillStar size={15} />
              <span> {movie.vote_average} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

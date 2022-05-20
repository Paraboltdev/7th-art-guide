import React, { useEffect, useState } from "react";
import series from "./series.json";
import "./seriesCard.css";
import { AiFillStar } from "react-icons/ai";
import { peticion } from "./utils/peticion";
import { useParams } from "react-router";

export function SeriesCaratula() {
  const [serie, setSerie] = useState(null);
  const { serieId } = useParams();
  console.log(serieId);
  useEffect(() => {
    peticion("/tv/" + serieId).then((data) => {
     
      setSerie(data);
    });
  }, [serieId]);

  if (!serie) {
    return null;
  }

  const imagenUrl = "https://image.tmdb.org/t/p/w500" + series.poster_path;
  return (
    <div className="container">
      <div className="imgcontent">
        <img src={imagenUrl} alt={series.name} />
        <p className="p_rating">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar /> <span> {series.vote_average} </span>
        </p>
      </div>
      <div className="text_div">
        <p>
          <strong>Title:</strong> {series.name}
        </p>
        <p>
          <strong>Descripton:</strong> {series.overview}{" "}
        </p>
      </div>
    </div>
  );
}

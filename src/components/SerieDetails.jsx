import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { peticion } from "./utils/peticion";
import "./seriesCard.css";
import { SeasonsCards } from "./SeasonsCards";

import noImage from "../assets/img/no-image.png";
import { SliderCards } from "./SliderCards";
import SliderCard from "./SliderCard";
import { NetworkInfo } from "./NetworkInfo";

export function SerieDetails() {
  let temporadas = [];
  const [seasons, setSeasons] = useState([]);
  const [serie, setSerie] = useState(null);
  const { serieId } = useParams();
  console.log(serieId);
  useEffect(() => {
    peticion("/tv/" + serieId).then((data) => {
      console.log(data);
      setSerie(data);

      temporadas = data.seasons;
      console.log(data.seasons);
    });
  }, [serieId]);

  if (!serie) {
    return null;
  }
  const imagenUrl = "https://image.tmdb.org/t/p/w500" + serie.poster_path;
  const backimg = "https://image.tmdb.org/t/p/w500" + serie.backdrop_path;
  const logo = "https://image.tmdb.org/t/p/w300" + serie.networks.logo_path;
  console.log(logo);
  return (
    <div className="main_div">
      <div className="title">
        <p> {serie.name}</p>
      </div>
      <div className="container">
        <div className="imgcontent">
          <img src={imagenUrl} alt={serie.name} />
          <div>
            <p className="p_rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span> {serie.vote_average} </span>
            </p>
            <p>
              Official Site:
              {serie.homepage ? (
                <a
                  href={serie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {serie.homepage}
                </a>
              ) : (
                serie.name
              )}
            </p>

            <div>
              {serie.networks.map((item) => (
                <NetworkInfo item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="info_container">
          <div className="seasons_div">
            {/* <SliderCards seasons={serie.seasons} /> */}
            {/* {serie.seasons.map((season, index)=>( */}
            {/* <SeasonsCards key={index} season={season} /> */}
            {/* )).reverse()} */}
          </div>
          <h2>Last episode:</h2>
          <div className="episode_div">
            <h3>
              T{serie.last_episode_to_air.season_number} E
              {serie.last_episode_to_air.episode_number}{" "}
            </h3>
            <h4> -{serie.last_episode_to_air.name}</h4>
          </div>
          <div className="text_div">
            <p>
              <strong>Descripton:</strong>
            </p>
            <p>
              {serie.overview ? serie.overview : "Description not avaiable"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

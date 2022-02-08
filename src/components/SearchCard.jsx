import React from "react";
import "./searchCard.css";
import noImage from "../assets/img/no-image.png";
import { Link } from "react-router-dom";

export function SearchCard({ search }) {
  const searchImg = search.poster_path
    ? "https://image.tmdb.org/t/p/w300" + search.poster_path
    : noImage;
  const movie = "/movie/" + search.id;
  const serie = "/serie/" + search.id;
  return (
    <ul>
      <Link to={"/movie/" + search.id || "/serie/" + search.id}>
        <li className="searchCard">
          <img
            className="searchImage"
            src={searchImg}
            alt={search.title}
            width={230}
            height={345}
          />
          <h3>
            <p>{search.title}</p>
          </h3>
        </li>
      </Link>
    </ul>
  );
}

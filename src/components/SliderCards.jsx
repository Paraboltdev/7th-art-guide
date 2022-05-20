import React from "react";
import noImage from "../assets/img/no-image.png";
import ImageGallery from "react-image-gallery";

export function SliderCards({ seasons }) {
  console.log(seasons);
  const images = (seasons || []).map((season) => ({
    original: season.poster_path
      ? "https://image.tmdb.org/t/p/w500" + season.poster_path
      : noImage,
    thumbnail: season.poster_path
      ? "https://image.tmdb.org/t/p/w500" + season.poster_path
      : noImage,
  }));

 
  return <ImageGallery items={images} />;
}

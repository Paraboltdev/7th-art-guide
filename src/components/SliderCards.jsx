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

  // const images = [
  //     {
  //       original: 'https://picsum.photos/id/1018/1000/600/',
  //       thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //     },
  //     {
  //       original: 'https://picsum.photos/id/1015/1000/600/',
  //       thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //     },
  //     {
  //       original: 'https://picsum.photos/id/1019/1000/600/',
  //       thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //     },

  // ];
  return <ImageGallery items={images} />;
}

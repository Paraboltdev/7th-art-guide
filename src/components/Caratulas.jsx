import React from 'react'
import { Link } from 'react-router-dom';
import style from "./caratulas.module.css"
import noImage from '../assets/img/no-image.png'

export  function Caratulas({peli: movie,}) {
    const imagenUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300"+ movie.poster_path : noImage
    return (
        
        <li className={style.movieCard}>
        <Link to={"/movie/" + movie.id}>
            <img  
            width ={230}
            height={345}
            className={style.movieImage} src={imagenUrl} alt={movie.title}/>
             <div>{movie.title}</div></Link>
        </li>
      
    );
}

import React from 'react'
import style from './caratulas.module.css'
import noImage from '../assets/img/no-image.png'



import { Link } from 'react-router-dom'

export  function SeriesCard({serie}) {
    const imagenUrl = serie.poster_path ? "https://image.tmdb.org/t/p/w500"+ serie.poster_path : noImage
    return (
        <li className={style.movieCard}>
        <Link to={"/serie/" + serie.id}>
            <img  
            width ={230}
            height={345}
            className={style.movieImage} src={imagenUrl} alt={serie.name}/>
             <div>{serie.name}</div></Link>
        </li>
    )
}

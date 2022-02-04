import React from 'react'
import './seasonCards.css'
import noImage from '../assets/img/no-image.png'

export  function SeasonsCards({season}) {
    const imgSeason = season.poster_path ? "https://image.tmdb.org/t/p/w300"+ season.poster_path : noImage
    
   
    return (
        <div className='seasons_card'>
            <img src={imgSeason} alt={season.name} 
             
            className='img_season_card'
                height={250}
                width={170}
            />
            <p className='season_num_p'><h4>{season.name}</h4></p>
        </div>
               
                
    )
}

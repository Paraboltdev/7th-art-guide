import React from 'react'
import Slider from "react-slick";
import { SeasonsCards } from './SeasonsCards';

export default function SliderCard({seasons}) {
    const imgSeason ="https://image.tmdb.org/t/p/w300"+ seasons.poster_path

    const cards= seasons.map((season) =>( <img src={imgSeason} />))
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} >
            
                
        
         
        
           
        </Slider>
    )
}
    
      
    
    

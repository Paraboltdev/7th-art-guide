import React from 'react'
const API ='https://api.themoviedb.org/3'
const bearer = process.env.REACT_APP_TMDB_BEARER
export  function peticion(path) {
    return (
        fetch(API + path
        ,{
      headers:{
        "Authorization": bearer,
        'Content-Type': 'application/json;charset=utf-8',
        },
    }) 
    .then((res)=> res.json())
    )
}

import React from 'react'

export  function NetworkInfo({item}) {
    console.log(item)
    const netlogo = "https://image.tmdb.org/t/p/w300"+ item.logo_path
     return (
        <div>
        <img src={netlogo} alt={item.name} width={100} height={50} />
            
        </div>
    )
}

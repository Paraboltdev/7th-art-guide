import React, { useEffect } from 'react'
import style from './busqueda.module.css'
import {FaSearch} from 'react-icons/fa'
import {Link, Route, useNavigate, useSearchParams} from 'react-router-dom'
import {useState} from 'react'
import { peticion } from './utils/peticion'


export  function Busqueda({searchPage}) {
    console.log(searchPage);
    const[textoBusqueda, setTextoBusqueda] = useState("")
    const[searchParams, setSearchParams] = useSearchParams()
   
    const[suggestions, setSuggestions]=useState([])
    const navigate = useNavigate()
    
  
  const serach= searchParams.get('search')
  useEffect(() =>{
      setTextoBusqueda(serach || "")
  },[serach])
       
            const handleSubmit = (e)=>{
            e. preventDefault();
           
               
            navigate('/searchpage?search=' + textoBusqueda)
           
           
        }

        const handleChange=(textoBusqueda)=>{
            // let matches =[]
            // if(textoBusqueda.length> 0){
            //     matches=info.filter(info =>{
            //         const regex= new RegExp(`${textoBusqueda}`, "gi");
            //         return info.match(regex)
            //     })
            // }
            // console.log("matches", matches);
            setSuggestions(textoBusqueda)
            setTextoBusqueda(textoBusqueda)
            console.log(textoBusqueda);
        }

    return (
        <>
        <form className={style.contenedorBusqueda} onSubmit={handleSubmit}>
            <div className={style.cajaBusqueda}>
                <input className={style.inputBuscar} type="text" 
                autofocus='true'
                value={textoBusqueda}  
                
                onChange={ (e) => handleChange(e.target.value)}/>
                <button className={style.botonBuscar} type="submit"><FaSearch size={25} /></button>
            </div>
        </form>

        
        </>
    )
}

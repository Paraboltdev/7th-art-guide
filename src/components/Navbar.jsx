import React, { useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { Busqueda } from "./Busqueda";
import "./navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi'

export function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [menuButton, setMenuButton]= useState(false)

  const handleClose = ()=>{
    setMenuButton(false)
  }
 
  return (
    <nav className="navbar">
    <div className="navbar_title">

    <Link to='/github.io7th-art-guide'>
      <h1>7<span>th</span> art guide</h1>
      </Link>
    </div>
      <ul className={menuButton ?"nav_links_mobile" : "nav_links"}>

     
        <NavLink to="/github.io7th-art-guide" activeClassName="active"  className="home" onClick={handleClose}>
         <li>Home</li> 
         </NavLink>
        <NavLink to="/peliculas" activeClassName="active" className="Movies"  onClick={handleClose}>
         <li>Movies</li>
        </NavLink>
        <NavLink to="/series" activeClassName="active" className="tvshows" onClick={handleClose}>
          <li>TV shows</li>
        </NavLink>
      <div className="search" >
        <Busqueda handleClose={handleClose} setMenuButton={setMenuButton}/>
      </div>
      
      </ul>
      <button className="btn_responsive" onClick={()=>setMenuButton(!menuButton)}><GiHamburgerMenu /></button>
     
    </nav>
  );
}

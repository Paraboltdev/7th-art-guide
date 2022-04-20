import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { Busqueda } from "./Busqueda";
import "./navbar.css";

export function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
 
  return (
    <div className="navbar">
    <Link to='/'>
      <h1 className="navbar_title">Criticones</h1>
      </Link>
      <div className="link_div">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/peliculas" activeClassName="active">
          Peliculas
        </NavLink>
        <NavLink to="/series" activeClassName="active">
          Series
        </NavLink>
      </div>
      <div className="search">
        <Busqueda />
      </div>
    </div>
  );
}

import React, { Fragment } from "react";
import { ListaPeliculas } from "./ListaPeliculas";
import { Busqueda } from "./Busqueda";
import { SeriesGrid } from "./SeriesGrid";
import { Home } from "./Home";
import { useSearchParams } from "react-router-dom";
import { LatestList } from "./LatestList";

export function PaginaEntrada() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  return (
    <Fragment>
      <LatestList />

      {/* <ListaPeliculas key={search}/> */}

      {/* <SeriesGrid /> */}
    </Fragment>
  );
}

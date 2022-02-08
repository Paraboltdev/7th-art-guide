import "./App.css";
import { useState } from "react";
import { Detalles } from "./Detalles";
import { PaginaEntrada } from "./components/PaginaEntrada";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SeriesGrid } from "./components/SeriesGrid";
import { ListaPeliculas } from "./components/ListaPeliculas";

import { Navbar } from "./components/Navbar";

import { SerieDetails } from "./components/SerieDetails";
import { SearchPage } from "./components/SearchPage";

import { Footer } from "./components/Footer";

export function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PaginaEntrada />} />
          <Route path="/peliculas" element={<ListaPeliculas />} />
          <Route path="/movie/:movieId" element={<Detalles />} />
          <Route path="/series" element={<SeriesGrid />} />
          <Route path="serie/:serieId" element={<SerieDetails />} />
          <Route exact path="/searchpage" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

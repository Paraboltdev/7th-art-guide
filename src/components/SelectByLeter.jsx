import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./selectByLeter.css";
import { SeriesCard } from "./SeriesCard";

export function SelectByLeter({ movies }) {
  const abc = [
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [leters, setLeters] = useState(abc);
  console.log(leters);
  const [leter, setLeter] = useState([]);
  console.log(leter);
  const [series, setSeries] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=5e6d91494c62aa650f3f1d4bdd93c010&with_keywords=${leter}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSeries(data.results);
        console.log(series);
        setLeters();
        setLeter(series.filter((item) => item.name[0] === leter));

        // setLeter(series.filter((item)=> item.name[0]=== leter.toString()))
        console.log(leter);
        console.log();
      });
  }, [leters]);

  const handleLetter = () => {
    setLeter(series.filter((item) => item.name[0] === leter));
    navigate("/series/");
  };

  return (
    <>
      <ul className="leter_container">
        {abc.map((leter) => (
          <li
            onClick={() =>
              setLeter(series.filter((item) => item.name[0] === leter))
            }
            className="leter_button"
          >
            {leter}
          </li>
        ))}
      </ul>
      <div>
        {leter.map((leter) => (
          <SeriesCard serie={leter} />
        ))}
      </div>
    </>
  );
}

import React from "react";
import "./MovieCard.css";
const MovieCard = (props) => {
  const { Title, Year, Poster, imdbID } = props.movie;
  return (
    <>
      <div
        className="movieCard"
        onClick={() => {
          props.updatemovieSelect(imdbID);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <img src={Poster} alt="" />
        <span>{Title} </span>
        <div>
          <span>type:Movie</span>
          <span>year:{Year}</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

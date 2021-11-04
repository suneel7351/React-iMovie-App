import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import axios from "axios";
const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieSelect } = props;
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${movieSelect}&apikey=a5487446`)
      .then((response) => {
        setMovieInfo(response.data);
      });
  }, [movieSelect]);
  return (
    <>
      {movieInfo ? (
        <>
          <span
            className="close"
            onClick={() => {
              props.updatemovieSelect();
            }}
          >
            X
          </span>
          <div className="movieInfo">
            {" "}
            <img src={movieInfo?.Poster} alt="" />
            <div className="info">
              <span>
                {movieInfo?.Type} : <span> {movieInfo?.Title}</span>
              </span>
              <span>
                Year : <span> {movieInfo?.Year} </span>
              </span>
              <span>
                Rated : <span> {movieInfo?.Rated} </span>
              </span>
              <span>
                Released : <span> {movieInfo?.Released} </span>
              </span>
              <span>
                Runtime : <span> {movieInfo?.Runtime} </span>
              </span>
              <span>
                Genre : <span> {movieInfo?.Genre} </span>
              </span>
              <span>
                Director : <span> {movieInfo?.Director} </span>
              </span>
              <span>
                Writer : <span> {movieInfo?.Writer} </span>
              </span>
              <span>
                Actors : <span> {movieInfo?.Actors} </span>
              </span>
              <span>
                Plot : <span> {movieInfo?.Plot} </span>
              </span>
              <span>
                Language : <span> {movieInfo?.Language} </span>
              </span>
              <span>
                Country : <span> {movieInfo?.Country} </span>
              </span>
              <span>
                Awards : <span> {movieInfo?.Awards} </span>
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner">Loading...</div>
      )}
    </>
  );
};

export default MovieInfo;

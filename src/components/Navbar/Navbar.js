import React, { useState } from "react";
import MovieSvg from "../Icons/MovieSvg.svg";
import SearchIcon from "../Icons/SearchIcon.svg";
import axios from "axios";
import "./Navbar.css";
import MovieCard from "../MovieCard/MovieCard";
import styled from "styled-components";
import MovieInfo from "../MovieInfo/MovieInfo";
const Navbar = () => {
  const [search, updatesearch] = useState();
  const [timeoutId, updatetimeoutId] = useState();
  const [movieList, updatemovieList] = useState();
  const [movieSelect, updatemovieSelect] = useState();
  const fetchData = async (searchString) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=a5487446`
    );
    updatemovieList(response.data.Search);
    console.log(response);
  };
  const onTextchange = (e) => {
    clearTimeout(timeoutId);
    updatesearch(e.target.value);
    const timeout = setTimeout(() => {
      fetchData(e.target.value);
    }, 500);
    updatetimeoutId(timeout);
  };
  const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2px;
    padding: 30px;
    justify-content: space-evenly;
  `;

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={MovieSvg} alt="Movie" />
          <span> React Movie App</span>
        </div>
        <div className="search">
          <img src={SearchIcon} alt="search" />
          <input
            placeholder="serach movie here"
            value={search}
            onChange={onTextchange}
            type="text"
          />
        </div>
      </div>
      {movieSelect && (
        <MovieInfo
          movieSelect={movieSelect}
          updatemovieSelect={updatemovieSelect}
        />
      )}
      <MovieContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => {
            return (
              <MovieCard
                movie={movie}
                key={index}
                updatemovieSelect={updatemovieSelect}
              />
            );
          })
        ) : (
          <img id="notfound" src={MovieSvg} alt="No movie found" />
        )}
      </MovieContainer>
    </>
  );
};

export default Navbar;

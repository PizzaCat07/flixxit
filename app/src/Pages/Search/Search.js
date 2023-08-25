import React, { useState } from "react";
import Header from "../../shared/components/Header";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchMovie, searchPerson, searchTv } from "../../shared/api/movieApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);

  //set baseurl for image size
  const imageBaseUrl = "https://image.tmdb.org/t/p/w92";

  const responsive = {
    0: { items: 1 },
    568: { items: 8 },
    1024: { items: 15 },
  };

  const searchHandler = async () => {
    await searchMovie(search, setMovie);
    await searchTv(search, setTv);
  };

  return (
    <>
      <div id="screenArea">
        <div id="searchArea">
          <TextField
            className="searchBar"
            id="search"
            type="search"
            label="Search Movie/TV"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                searchHandler();
              }
            }}
            InputProps={{
              endAdornment: (
                <div onClick={() => searchHandler()}>
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                </div>
              ),
            }}
          />
        </div>
        <div id="movieResults">
          <h2 className="category">Movies</h2>
          <AliceCarousel
            mouseTracking
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={movie.map((x) => {
              return (
                <div className="item" onClick={() => console.log(x.id)}>
                  <img src={imageBaseUrl + x.poster_path} />
                </div>
              );
            })}
          />
        </div>
        <div id="tvResults">
          <h2 className="category">TV</h2>
          <AliceCarousel
            mouseTracking
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={tv.map((x) => {
              return (
                <div className="item" onClick={() => console.log(x.id)}>
                  <img src={imageBaseUrl + x.poster_path} />
                </div>
              );
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Search;

import React, { useState } from "react";
import Header from "../../shared/components/Header";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchMovie, searchPerson, searchTv } from "../../shared/api/movieApi";
import Carousel from "../../shared/components/Carousel";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);

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
          {movie.length > 0 ? <Carousel title={"Movies"} data={movie} /> : null}
        </div>
        <div id="tvResults">
          {tv.length > 0 ? <Carousel title={"TV"} data={tv} /> : null}
        </div>
      </div>
    </>
  );
};

export default Search;

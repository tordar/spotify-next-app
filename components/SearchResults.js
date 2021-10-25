import { useState } from "react";
// import style from '../styles/SearchResults.module.css'

const SearchResults = ({ results }) => {
  return (
    <div>
      <div>
        <h3>{results.name}</h3>
        <p>{results.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default SearchResults;

import React from "react"
import Card from "../card/Card"

const Search = ({ searchMovie }) => {
    console.log("API Response:", searchMovie);
    return (
      <div className="movie__list">
        <div className="list__cards">
          {searchMovie && searchMovie.length > 0 ? (
            searchMovie.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
    );
  };
  
export default Search
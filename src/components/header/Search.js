import React, { useState,useEffect } from "react"
import Card from "../card/Card"
import { useParams } from "react-router-dom";

const Search = () => {
  const [searchMovie,setSearchMovie]=useState([])
  const [loading, setLoading] = useState(true);
  const {key}=useParams()
  console.log(key)
  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${key}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((result) => {
          setSearchMovie(result.results);
          console.log(result.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // Handle the error (e.g., show a message to the user)
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the fetch is complete
        });
    };

    getData();
  }, [key]);
    return (
    
      <div className="movie__list">
        <div className="list__cards">
          {/* {searchMovie && searchMovie.length > 0 ? (
            searchMovie.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))
          ) : (
            <p>No results found.</p>
          )} */}
           {loading && searchMovie.length === 0 ? (
          <p>Loading...</p>
        ) : searchMovie.length > 0 ? (
          searchMovie.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <p>No results found.</p>
        )}
        </div>
      </div>
    );
  };
  
export default Search
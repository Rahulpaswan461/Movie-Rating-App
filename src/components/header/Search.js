import React, { useEffect, useState } from "react"
import Card from "../card/Card"
import {useParams} from "react-router-dom"
const Search = ({ searchMovie }) => {
  const {key} = useParams();
  const [searchData,setSearchData] = useState([]);

  function fetchData (){
    console.log(key)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${key}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(result => {
        console.log("API Result:", result);
        console.log("THe header component")
        setSearchData(result.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(()=>{
    fetchData();
  },[key])

    return (
      <div className="movie__list">
        <div className="list__cards">
          {searchData && searchData.length > 0 ? (
            searchData.map((movie) => (
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

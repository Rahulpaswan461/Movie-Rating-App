import React, { useState } from "react";
import "./Header.css";
import { Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"
// import Search from "./Search";

const Header = () => {
  // const [searchData, setSearchData] = useState([]);
  // const [btnClick, setBtnClick] = useState(false);
  const [value, setValue] = useState('');
const navigate = useNavigate();
  // const getData = () => {
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${value}`)
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! Status: ${res.status}`);
  //     }
  //     return res.json();
  //   })
  //   .then(result => {
  //     console.log("API Result:", result);
  //     console.log("THe header component")
  //     setSearchData(result.results);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  // };

  const clickHandler = () => {
    // setBtnClick(true);
    console.log(value)
    navigate(`search/${value}`);
    
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" src="http://clipart-library.com/images_k/movie-transparent/movie-transparent-10.png" style={{ width: "120px", height: "80px" }} alt="MovieDB Logo" />
        </Link>
      </div>
      <div className="middleSection">
        <input type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
        {/* <Link to="/search" style={{ textDecoration: "none" }}>
          {searchData.length > 0 ? <Search searchMovie={searchData} /> : <button onClick={clickHandler}>search</button>}
        </Link> */}
        <button onClick={clickHandler}>search</button>
      </div>
      <div className="headerRight">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }} ><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
      </div>
    </div>
  );
};

export default Header;

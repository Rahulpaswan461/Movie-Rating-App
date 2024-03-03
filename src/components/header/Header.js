import React, { useState } from "react";
import "./Header.css";
import { Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import 'material-icons/iconfont/material-icons.css';

const Header = () => {

  const [clickBtn, setClickBtn] = useState(false);
const navigate = useNavigate();
   const [value,setValue]=useState('')
  const clickHandler = () => {
    console.log(value)
    navigate(`search/${value}`);
    setValue('')
    
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" src="http://clipart-library.com/images_k/movie-transparent/movie-transparent-10.png"   alt="Movie Night Logo" />
        </Link>
      </div>
      <div className="middleSection">
        <input type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
        {/* <Link to="/search" style={{ textDecoration: "none" }}>
          {searchData.length > 0 ? <Search searchMovie={searchData} /> : <button onClick={clickHandler}>search</button>}
        </Link> */}
        <button onClick={clickHandler}><i className="material-icons">search</i></button>
      </div>
      <div className="headerRight">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }} ><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
      </div>
      <div className="toggle" onClick={()=>setClickBtn(!clickBtn)}>
      <i className="material-icons">  {clickBtn ? 'close' : 'menu'}</i>
      </div>
      {
        clickBtn ? <div className="menu-section">
          <div>
           <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }} ><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
        </div></div>:null
      }
    </div>
  );
};
export default Header;

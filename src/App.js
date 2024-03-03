import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';
import Search from './components/header/Search';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="/search/:key" element={<Search/>}></Route>
              <Route path="movie/:id" element={<Movie/>}></Route>
              <Route path="movies/:type" element={<MovieList/>}></Route>
              <Route path="/*" element={<h3>Something Went Wrong ! Go to home</h3>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import AddedMovies from '../AddedMovies/AddedMovies';
import './movieList.css';

function MovieList({ saveList }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('godfather');
  const [cart, setCart] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const url = `http://www.omdbapi.com/?s=${searchText}&apikey=55d8cf79`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setData(data.Search);
          setNotFound(false);
        } else {
          setData([]);
          setNotFound(true);
        }
        console.log(data.Search);
      });
  }, [url]);
  
  const handleSearch = (text) => {
    const trimmedText = text.trim();
    if (trimmedText) {
      setSearchText(trimmedText);
    }
  };

  const addToCart = (movie) => {
    const isAlreadyInCart = cart.some((item) => item.imdbID === movie.imdbID);
    if (!isAlreadyInCart) {
      setCart([...cart, movie]);
    }
  };
  const removeFromCart = (movie) => {
    const updatedCart = cart.filter((item) => item.imdbID !== movie.imdbID);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <div>
        <SearchBar onSearch={handleSearch} />
        {notFound ? (
          <div className="not-found">Not Found</div>
        ) : (
          data.map((movie) => (
            <div key={movie.imdbID} className="movie-cart">
              <div>
                <h2 className='title'>{movie.Title} ({movie.Year})</h2>
                <img className='poster' src={movie.Poster} alt={movie.Title} />
              </div>
              <div>
                <button className='add-to-list' onClick={() => addToCart(movie)}>ADD TO LIST</button>
                <br />
                <button className='go-to-imdb' onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}>GO TO IMDB</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <AddedMovies cart={cart} removeFromCart={removeFromCart} saveList={saveList} />
      </div>
    </div>
  );
}

export default MovieList;

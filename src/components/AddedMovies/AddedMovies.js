import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./addedMovies.css"
const AddedMovies = ({ cart, removeFromCart, saveList }) => {
  const [listName, setListName] = useState('');

  const handleSave = () => {
    if (listName.trim() === '' || cart.length === 0) {
      alert('Please enter a list name or add films to the list.');
      return;
    }
    saveList(listName, cart);
    setListName('');
  };

  return (
    <div className='listed-box'>
      <input
        type='text'
        placeholder='Create a new list'
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      {cart.length > 0 ? (
        cart.map((movie) => (
          <div key={movie.imdbID} className='listed-movie'>
            <div>
              <h3>{movie.Title}</h3>
            </div>
            <button onClick={() => removeFromCart(movie)}>x</button>
          </div>
        ))
      ) : (
        <p>No movies added to the list.</p>
      )}
      <div className='list-buttons'>
        <button onClick={handleSave}>Save</button>
        <button><Link to='/saved'>Go to Basket</Link></button>
      </div>
    </div>
  );
};

export default AddedMovies;

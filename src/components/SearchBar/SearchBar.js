import React, { useState } from 'react'
import "./SearchBar.css"
const SearchBar = ({onSearch}) => {
  const[inputValue,setInputValue] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSearch(inputValue)

  };
    return (
    <form className='search-bar' onSubmit={handleSubmit}>
        <input type="text" placeholder="Write name of the film" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
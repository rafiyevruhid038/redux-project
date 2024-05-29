import React from 'react'
import Header from '../components/Header/Header'
import MovieList from '../components/MovieList/MovieList'


function Home({saveList}) {
  return (
    <div>
        <Header />
        <MovieList saveList={saveList}  />
    </div>
  )
}

export default Home
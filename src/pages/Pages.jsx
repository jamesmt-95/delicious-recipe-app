// import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import SearchResult from './SearchResult'
import RecipeDetails from './RecipeDetails'
import Error from './Error'
import {Routes, Route } from 'react-router-dom'

const Pages = () => {
  return (
    //wrapping the following with BrowserRouter in App.jsx
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/search/:query' element={<SearchResult/>}/>
        <Route path='/*' element={<Error msg={'Invalid URL'}/>}/>
        <Route path='/recipe-details/:id' element={<RecipeDetails/>}/>
      </Routes>
  )
}

export default Pages
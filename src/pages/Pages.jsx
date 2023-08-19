// import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import SearchResult from './SearchResult'
import RecipeDetails from './RecipeDetails'
import Error from './Error'
import {Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence } from "framer-motion"


const Pages = () => {
  const location = useLocation()
  return (
    //wrapping the following with BrowserRouter in App.jsx
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/search/:query' element={<SearchResult/>}/>
        <Route path='/*' element={<Error msg={'Invalid URL'}/>}/>
        <Route path='/recipe-details/:id' element={<RecipeDetails/>}/>
      </Routes>
      </AnimatePresence>
  )
}

export default Pages
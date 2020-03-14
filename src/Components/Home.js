import React from 'react'
import {
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return(
    <Route>
      <Link to='filteredIngredient'> Filter By Ingredient </Link>
      <Link to='filteredGlass'> Filter By Glass </Link>
    </Route>
  )
}

export default Home
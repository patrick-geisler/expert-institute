import React from 'react'
import {
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return(
    <Route>
      <Link to='filteredLiquor'> Filter By Liquor </Link>
      <Link to='filteredGlass'> Filter By Glass </Link>
    </Route>
  )
}

export default Home
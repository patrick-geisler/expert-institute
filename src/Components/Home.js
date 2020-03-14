import React from 'react'
import {
  Route,
  Link
} from "react-router-dom";
import '../Styles/Home.css'
import { Button}  from '@material-ui/core'

const Home = () => {
  return(
    <Route >
      <div className='home-container'>
      <Button color='primary' className={'home-button'}>
        <Link to='filteredIngredient'> Filter By Ingredient </Link>
       </Button> 
       <Button color='primary' className={'home-button'}>
        <Link to='filteredGlass'> Filter By Glass </Link>
        </Button>
      </div>
    </Route>
  )
}

export default Home
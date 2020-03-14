import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FilteredList from './Components/FilteredList'
import Home from './Components/Home'
import {
  Route,
  Switch
} from "react-router-dom"

import { bindActionCreators } from 'redux'
import { getRandomCocktails, filteredLists } from './store/cocktails'

const Wrapper = ({cocktails, dispatchGetRandomCocktail}) => {

  useEffect(() => {
    dispatchGetRandomCocktail()
  }, [dispatchGetRandomCocktail])

  const RandDrink = cocktails.drinks ? cocktails.drinks[0].strDrink : 'Loading'
  console.log(RandDrink)

  return(
    //add Animations
    <Switch>
      <Route exact path='/' component={Home} />
      <Route 
        path='/filteredIngredient' 
        render={(props) => <FilteredList listType={filteredLists.INGREDIENT} {...props} />}
      />
      <Route 
        path='/filteredGlass' 
        render={(props) => <FilteredList listType={filteredLists.GLASS} {...props} />}
      />
      {/* Add 404 */}
      <Route
        render={(props) => <div>404</div>} 
      />
    </Switch>
  )
}

const mapStateToProps = state => ({
  cocktails: state.cocktails
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetRandomCocktail: getRandomCocktails,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FilteredList from './Components/FilteredLiquor'
import Home from './Components/Home'
import {
  Route,
  Switch
} from "react-router-dom"

import { bindActionCreators } from 'redux'
import { getRandomCocktails, filteredLists } from './store/cocktails'

const Wrapper = ({cocktails, dispatchGetCocktails}) => {

  useEffect(() => {
    dispatchGetCocktails()
  }, [dispatchGetCocktails])

  const RandDrink = cocktails.drinks ? cocktails.drinks[0].strDrink : 'Loading'
  console.log(RandDrink)

  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route 
        path='/filteredLiquor' 
        render={(props) => <FilteredList listType={filteredLists.INGREDIENT} />}
      />
      <Route 
        path='/filteredGlass' 
        render={(props) => <FilteredList listType={filteredLists.GLASS} />}
      />
    </Switch>
  )
}

const mapStateToProps = state => ({
  cocktails: state.cocktails
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetCocktails: getRandomCocktails,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
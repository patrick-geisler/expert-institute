import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFilteredList } from '../store/cocktails'
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import DrinkDetail from './DrinkDetail'
import '../Styles/FilteredList.css';

import DrinksByCategory from './DrinksByCategory'

const FilteredList = ({listType, filteredList, dispatchGetFilteredList, match}) => {
  useEffect(() => {
    dispatchGetFilteredList(listType)
  }, [dispatchGetFilteredList, listType])

  const displayList = filteredList.drinks ? filteredList.drinks : ['Loading']
  return(
    <div className='filtered-list-container'>
      <div>
      {displayList[0] && displayList.map((displayElement, index) => {
        //FIX
        const filterElement = displayElement.strIngredient1 || displayElement.strGlass
        return(
          <div key={index}>
            <Link to={`${match.url}/${filterElement}`}>
              {filterElement}
            </Link>
          </div>
        )
      })}
      </div>
      <Switch>
        <Route 
          exact
          path={`${match.path}/:drinksList`} 
          render={(props) => <DrinksByCategory listType={listType} {...props} />}
        />
        <Route 
          path={`${match.path}/:drinksList/:drinkId`} 
          render={(props) => <DrinkDetail {...props}/>}
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  filteredList: state.filteredList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetFilteredList: getFilteredList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FilteredList)
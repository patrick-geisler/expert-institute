import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFilteredList } from '../store/cocktails'
import {
  Route,
  Link
} from "react-router-dom";

const FilteredList = ({listType, filteredList, dispatchGetFilteredList}) => {

  useEffect(() => {
    dispatchGetFilteredList(listType)
  }, [dispatchGetFilteredList, listType])

  const displayList = filteredList.drinks ? filteredList.drinks : ['Loading']

  console.log(displayList)

  return(
    <Route>
      {displayList[0] && displayList.map((displayElement, index) => {
        const filterElement = displayElement.strIngredient1 || displayElement.strGlass
        return(
          <div key={index}>
            <Link to={`/${filterElement}`}>
              {filterElement}
            </Link>
          </div>
        )
      })}
    </Route>
  )
}

const mapStateToProps = state => ({
  filteredList: state.filteredList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetFilteredList: getFilteredList,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FilteredList)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getDrinkDetails } from '../store/cocktails'

const DrinkDetail = ({dispatchGetDrinkDetails, drinkDetails, match}) => {
  const drinkId = match.params.drinkId

  useEffect(() => {
    dispatchGetDrinkDetails(drinkId)
  }, [dispatchGetDrinkDetails, drinkId])

  const drinkInfo = drinkDetails.drinks ? drinkDetails.drinks[0] : ['Loading']
  console.log(drinkInfo)
  return(
  <div>{drinkInfo.strDrink}</div>
  )
}

const mapStateToProps = state => ({
  drinkDetails: state.drinkDetails
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetDrinkDetails: getDrinkDetails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail)
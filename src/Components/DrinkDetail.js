import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../Styles/DrinkDetailsCard.css'

import { getDrinkDetails } from '../store/cocktails'

const DrinkDetail = ({dispatchGetDrinkDetails, drinkDetails, match}) => {
  const drinkId = match.params.drinkId

  useEffect(() => {
    dispatchGetDrinkDetails(drinkId)
  }, [dispatchGetDrinkDetails, drinkId])

  const drinkInfo = drinkDetails.drinks ? drinkDetails.drinks[0] : ['Loading']
  console.log(drinkInfo)
  return(
  <div className='drink-detail-card'>
    <img src={`${drinkInfo.strDrinkThumb}/preview`} height='200' width='200' alt={drinkInfo.strDrink} />
    <span>{drinkInfo.strDrink}</span>
    <span>{drinkInfo.strCategory}</span>
    <span>{drinkInfo.strInstructions}</span>
    <span> Ingredients: </span>
    <span>{drinkInfo.strIngredient1} - {drinkInfo.strMeasure1}</span>
    <span>{drinkInfo.strIngredient2} - {drinkInfo.strMeasure2}</span>
    <span>{drinkInfo.strIngredient3} - {drinkInfo.strMeasure3}</span>
    <span>{drinkInfo.strIngredient4} - {drinkInfo.strMeasure4}</span>
    <span>{drinkInfo.strIngredient5} - {drinkInfo.strMeasure5}</span>
    <span>{drinkInfo.strIngredient6} - {drinkInfo.strMeasure6}</span>
    <span>{drinkInfo.strIngredient7} - {drinkInfo.strMeasure7}</span>
    <span>{drinkInfo.strIngredient10} - {drinkInfo.strMeasure10}</span>
  </div>
  )
}

const mapStateToProps = state => ({
  drinkDetails: state.drinkDetails
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetDrinkDetails: getDrinkDetails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail)
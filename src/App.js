import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCocktails } from './store/cocktails'

const Wrapper = ({cocktails, dispatchGetCocktails}) => {

  useEffect(() => {
    dispatchGetCocktails()
  }, [dispatchGetCocktails])

  const RandDrink = cocktails.drinks ? cocktails.drinks[0].strDrink : 'Loading'

  return(
    <div>
      {RandDrink}
    </div>
  )
}

const mapStateToProps = state => ({
  cocktails: state.cocktails
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetCocktails: getCocktails,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
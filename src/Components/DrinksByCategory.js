import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDrinksByFilter} from '../store/cocktails'
import { Link, Route } from 'react-router-dom'

import { ButtonBase }  from '@material-ui/core'


const DrinksByCategory = ({ listType, dispatchGetdrinksByFilter, drinkList, match }) => {
  const filterParam = match.params.drinksList

  useEffect(() => {
    dispatchGetdrinksByFilter(listType, filterParam)
  }, [dispatchGetdrinksByFilter, filterParam, listType])

  const filteredDrinkList = drinkList.drinks ? drinkList.drinks : ['Loading']
  return (
    <Route>
    <div className='filtered-list-cards'>
      {filteredDrinkList[0] && filteredDrinkList.map((drink, index) => {
        return(
          //Fix Alt
          <Link to={`${match.url}/${drink.idDrink}`} key={index}>
            <div className='drinkCard' >
              <ButtonBase color='primary' variant='contained' className={'sidebar-button'}>
                <img src={`${drink.strDrinkThumb}/preview`} width='200' height='200' alt={drink.strDrink}/>
                <div className={'drink-title'}><strong>{drink.strDrink}</strong></div>
              </ButtonBase>
            </div>
          </Link>
        )
      })}
    </div>
    </Route>
  )
}

const mapStateToProps = state => ({
  drinkList: state.drinkList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetdrinksByFilter: getDrinksByFilter
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DrinksByCategory)
export const initialState = {
  cocktails: [],
  isDataFetching: false
}


const receiveData = (json) => {
  return {
    type: 'RECEIVE_POSTS',
    cocktails: json
  }
}

const isDataFetching = (bool) => {
  return {
    type: `IS_DATA_FETCHING`,
    bool
  }
}


const getCocktails = () => {
  return (dispatch) => {
    dispatch(isDataFetching(true))
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveData(json))
      )
      .then(()=>{
        dispatch(isDataFetching(false))
      })
  }
}

export {
  getCocktails,
  isDataFetching
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case `RECEIVE_POSTS`:
      return Object.assign({}, state, {
        cocktails: action.cocktails
      })
    case `IS_DATA_FETCHING`:
      return Object.assign({}, state, {
        isDataFetching: action.bool
      })
    default:
      return state
  }
}

export default rootReducer

export const initialState = {
  cocktails: [],
  isDataFetching: false,
  filteredList: []
}

export const filteredLists = {
  INGREDIENT: 'ingredient',
  GLASS: 'glass',
  CATEGORY: 'category',
  ALCOHOLIC: 'alcoholic'
}

//TODO MAKE NEW STATE FOR EACH TYPE OF FILTERED LIST

const receiveRandomCocktail = (json) => {
  return {
    type: 'RECEIVE_RANDOM_COCKTAIL',
    cocktails: json
  }
}

const receiveFilteredList = (json) => {
  return {
    type: 'RECEIVE_FILTERED_LIST',
    filteredList: json
  }
}

const isDataFetching = (bool) => {
  return {
    type: `IS_DATA_FETCHING`,
    bool
  }
}


const getRandomCocktails = () => {
  return (dispatch) => {
    dispatch(isDataFetching(true))
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(
        response => response.json(),
        error => console.log('Failed to fetch Random Drink', error)
      )
      .then(json =>
        dispatch(receiveRandomCocktail(json))
      )
      .then(() => {
        dispatch(isDataFetching(false))
      })
  }
}

const getFilteredList = (type) => {
  let fetchUrl
  if(type === filteredLists.INGREDIENT){
    fetchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
  } else if (type === filteredLists.GLASS){
    fetchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
  } else {
    console.log('OOOOPS')
  }
  return (dispatch) => {
    dispatch(isDataFetching(true))
    return fetch(fetchUrl)
    .then(
      response => response.json(),
      error => console.log('Failed to fetch ingredient List', error)
    )
    .then(json => {
        dispatch(receiveFilteredList(json))
    })
    .then(() => {
      dispatch(isDataFetching(false))
    })
  }
}

export {
  getRandomCocktails,
  isDataFetching,
  getFilteredList
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case `RECEIVE_RANDOM_COCKTAIL`:
      return Object.assign({}, state, {
        cocktails: action.cocktails
      })
    case `RECEIVE_FILTERED_LIST`:
      return Object.assign({}, state, {
        filteredList: action.filteredList
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

export const initialState = {
  cocktails: [],
  isDataFetching: false,
  filteredList: [],
  drinkList: [],
  drinkDetails: []
}

export const filteredLists = {
  INGREDIENT: 'ingredient',
  GLASS: 'glass',
  CATEGORY: 'category',
  ALCOHOLIC: 'alcoholic'
}

//TODO MAKE NEW STATE FOR EACH TYPE OF FILTERED LIST
//TODO BREAK APART INTO SEPRATE FILES FOR EACH ROUTE
// NORMALIZE DATA IN REDUCER???
// TODO FIX ERROR HANDLING

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

const receiveDrinkList = (json) => {
  return {
    type: 'RECEIVE_DRINK_LIST',
    drinkList: json
  }
}

const receiveDrinkDetails = (json) => {
  return {
    type: 'RECEIVE_DRINK_DETAILS',
    drinkDetails: json
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

const getFilteredList = (listType) => {
  let fetchUrl
  if(listType === filteredLists.INGREDIENT){
    fetchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
  } else if (listType === filteredLists.GLASS){
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

const getDrinksByFilter = (listType, filterParam) => {
  let fetchUrl
  if(listType === filteredLists.INGREDIENT){
    fetchUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filterParam}`
  } else if (listType === filteredLists.GLASS){
    fetchUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${filterParam}`
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
        dispatch(receiveDrinkList(json))
    })
    .then(() => {
      dispatch(isDataFetching(false))
    })
  }
}

const getDrinkDetails = (drinkId) => {
  console.log(drinkId)
  return (dispatch) => {
    dispatch(isDataFetching(true))
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14588`)
      .then(
        response => response.json(),
        error => console.log('Failed to fetch Random Drink', error)
      )
      .then(json =>
        dispatch(receiveDrinkDetails(json))
      )
      .then(() => {
        dispatch(isDataFetching(false))
      })
  }
}

export {
  getRandomCocktails,
  isDataFetching,
  getFilteredList,
  getDrinksByFilter,
  getDrinkDetails
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
    case `RECEIVE_DRINK_LIST`:
      return Object.assign({}, state, {
        drinkList: action.drinkList
      })
    case `RECEIVE_DRINK_DETAILS`:
      return Object.assign({}, state, {
        drinkDetails: action.drinkDetails
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

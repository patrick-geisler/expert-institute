import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../store/cocktails'


export default function configureStore() {
  //Configure Redux Dev Tools
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )
}
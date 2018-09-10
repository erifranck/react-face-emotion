import {createStore, applyMiddleware} from 'redux'
import reducer from 'redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const compose = composeWithDevTools(
  applyMiddleware(thunk)
)

const store = createStore(reducer, compose )

export default store

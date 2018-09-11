import {createStore, applyMiddleware} from 'redux'
import reducer from 'redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  blackList: ['emotion'],
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const compose = composeWithDevTools(
  applyMiddleware(thunk)
)

const store = createStore(persistedReducer, compose)

export const persistor = persistStore(store)

export default store

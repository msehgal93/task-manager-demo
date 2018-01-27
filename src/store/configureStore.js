/*
 *configureStore
 * redux store creation with "persistent storage"
 */
import { createStore } from 'redux'
import throttle from 'lodash/throttle'

import mainReducer from './reducers'
import { loadState, saveState } from './_localStorage'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(mainReducer, persistedState)

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore
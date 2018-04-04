/* global window */

import {combineReducers, createStore } from 'redux'
import {crumbs} from "../../../src/store"

const rootReducer = combineReducers({
    crumbs
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {
    store
}


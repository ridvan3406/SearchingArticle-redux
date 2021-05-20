
import { combineReducers,createStore } from 'redux'
import articleListReducer from '../reducers/articleListReducer'
import searchReducer from '../reducers/searchReducer'

const allReducers =combineReducers(
   { articleListReducer,
    searchReducer}
)

const myStore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default myStore;
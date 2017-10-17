import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import todos from './todos'
import visibilityFilter from './visibilityFilter';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({  todos,
  visibilityFilter});
const store = createStoreWithMiddleware(reducer);
export default store

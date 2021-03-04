import { combineReducers } from 'redux';
import filterReducer from "./filterReducer";
import sortingReducer from "./sortingReducer";


const reducer = combineReducers({
  filter: filterReducer,
  sort: sortingReducer
});

export default reducer;

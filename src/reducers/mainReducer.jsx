import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import sortingReducer from './sortingReducer';
import ticketsReducer from './TicketsReducer';

const reducer = combineReducers({
  filter: filterReducer,
  sort: sortingReducer,
  tickets: ticketsReducer,
});

export default reducer;


const initialState = {
  searchId: null,
  tickets: [],
  error: false,
  stop: false
}

const ticketsReducer = (state = initialState, {type, tickets, stop, searchId}) => {
  switch (type) {
    case "SET_NEW_SEARCH_ID":
      return {...state, searchId}
    case "SET_NEW_TICKETS":
      return {
        ...state,
        tickets: [...state.tickets, ...tickets],
        stop,
      };
    case "SET_DATA_ERROR":
      return {
        ...state,
        tickets: [...state.tickets, ...tickets],
        stop
      }
    default:
      return state;
  }
}

export default ticketsReducer;

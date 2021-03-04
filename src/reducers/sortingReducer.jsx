const initialState = {
  currentSorting: "cheapest"
}

const sortingReducer = (state = initialState, {type}) => {
  switch (type) {
    case "SORT_CHEAPEST":
      return (state.currentSorting === "fastest") ? { currentSorting: "cheapest" } : state;
    case "SORT_FASTEST":
      return (state.currentSorting === "cheapest") ? { currentSorting: "fastest" } : state;
    default:
      return state;
  }
}

export default sortingReducer;

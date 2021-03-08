
export const allChecked = () => ({type: "ALL_CHECKED"});

export const noChecked = () => ({type: "NO_CHECKED"});

export const oneChecked = () => ({type: "ONE_CHECKED"});

export const twoChecked = () => ({type: "TWO_CHECKED"});

export const threeChecked = () => ({type: "THREE_CHECKED"});

export const sortCheapest = () => ({type: "SORT_CHEAPEST"});

export const sortFastest = () => ({type: "SORT_FASTEST"});

export const setNewTicketsInStore = (payload) => ({type: "SET_NEW_TICKETS", ...payload});

export const setDataErrorInStore = (payload) => ({type: "SET_DATA_ERROR", ...payload});

export const setNewSearchIdInStore = (payload) => ({type: "SET_NEW_SEARCH_ID", ...payload});

export const fetchId = (service) => (dispatch) => {
  service.getSearchId().then((id) => {
    dispatch(setNewSearchIdInStore({searchId: id}))
  })
}

export const fetchTickets = (service, id) => (dispatch) => {
  service.getTickets(id)
    .then(({tickets, stop}) => {
      dispatch(setNewTicketsInStore({tickets, stop}))
    })
    .catch(() => {
      dispatch(setDataErrorInStore({tickets: [], stop: false}))
    })
}

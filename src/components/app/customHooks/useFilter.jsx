const useFilter = (tickets, filter) => {
  const filterTickets = () => {
    const { isCheckedAll, isCheckedNo, isCheckedOne, isCheckedTwo, isCheckedThree } = filter;
    if (isCheckedAll) {
      return tickets;
    }
    let updatedTickets = [];
    if (isCheckedNo) {
      const filteredTickets = tickets.filter(
        (elem) => elem.segments[0].stops.length === 0 || elem.segments[1].stops.length === 0
      );
      updatedTickets = [...updatedTickets, ...filteredTickets];
    }
    if (isCheckedOne) {
      const filteredTickets = tickets.filter(
        (elem) => elem.segments[0].stops.length === 1 || elem.segments[1].stops.length === 1
      );
      updatedTickets = [...updatedTickets, ...filteredTickets];
    }
    if (isCheckedTwo) {
      const filteredTickets = tickets.filter(
        (elem) => elem.segments[0].stops.length === 2 || elem.segments[1].stops.length === 2
      );
      updatedTickets = [...updatedTickets, ...filteredTickets];
    }
    if (isCheckedThree) {
      const filteredTickets = tickets.filter(
        (elem) => elem.segments[0].stops.length === 3 || elem.segments[1].stops.length === 3
      );
      updatedTickets = [...updatedTickets, ...filteredTickets];
    }
    return updatedTickets;
  };

  const filteredTickets = filterTickets();

  return [filteredTickets];
};

export default useFilter;

const useSorting = (filteredTickets, sort) => {
  const sortTickets = () => {
    const { currentSorting } = sort;
    switch (true) {
      case currentSorting === 'cheapest':
        return filteredTickets.sort((prevTicket, nextTicket) => prevTicket.price - nextTicket.price);
      case currentSorting === 'fastest':
        return filteredTickets.sort(
          (prevTicket, nextTicket) =>
            prevTicket.segments[0].duration +
            prevTicket.segments[1].duration -
            (nextTicket.segments[0].duration + nextTicket.segments[1].duration)
        );
      default:
        return filteredTickets;
    }
  };

  const sortedTickets = sortTickets();

  return [sortedTickets];
};

export default useSorting;

const useSorting = (filteredTickets, sort) => {
  const sortTickets = () => {
    const { currentSorting } = sort;
    switch (true) {
      case currentSorting === 'cheapest':
        return filteredTickets.sort((a, b) => a.price - b.price);
      case currentSorting === 'fastest':
        return filteredTickets.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        );
      default:
        return filteredTickets;
    }
  };

  const sortedTickets = sortTickets();

  return [sortedTickets];
};

export default useSorting;

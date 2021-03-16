import React from 'react';
import Ticket from '../../Ticket/Ticket';

const useRenderTickets = (sortedTickets) => {
  const renderTickets = () => sortedTickets.slice(0, 5).map((ticket, index) => <Ticket id={index} data={ticket} />);

  const ticketsToBeRendered = renderTickets();

  return [ticketsToBeRendered];
};

export default useRenderTickets;

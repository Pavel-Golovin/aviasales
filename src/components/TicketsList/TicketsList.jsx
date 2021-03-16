import React from 'react';
import PropTypes from 'prop-types';
import classes from './TicketsList.module.scss';

const TicketsList = ({ list }) => (
  <ul>
    {list.map((ticket) => (
      <li key={ticket.props.id} className={classes.tickets__item}>
        {ticket}
      </li>
    ))}
  </ul>
);

TicketsList.defaultProps = {
  list: [],
};

TicketsList.propTypes = {
  list: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default TicketsList;

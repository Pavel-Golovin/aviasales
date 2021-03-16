import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Progress, Alert } from 'antd';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import TicketsList from '../TicketsList/TicketsList';
import SortingPanel from '../SortingList/SortingPanel';
import Filters from '../Filters/Filters';
import ServiceAPI from '../../services/backend';
import * as actions from '../../actions';
import { useFilter, useRenderTickets, useSorting } from './customHooks'; // eslint-disable-line import/no-unresolved
import classes from './App.module.scss'; // eslint-disable-line import/no-unresolved

const App = (props) => {
  const { tickets, stop, searchId, filter, sort, fetchId, fetchTickets } = props;

  useEffect(() => {
    const service = new ServiceAPI();
    if (!searchId) {
      fetchId(service);
    } else if (!stop) {
      fetchTickets(service, searchId);
    }
  }, [searchId, tickets]); // eslint-disable-line react-hooks/exhaustive-deps

  const [filteredTickets] = useFilter(tickets, filter);
  const [sortedTickets] = useSorting(filteredTickets, sort);
  const [ticketsToBeRendered] = useRenderTickets(sortedTickets);

  const content =
    ticketsToBeRendered.length || !stop ? (
      <TicketsList list={ticketsToBeRendered} />
    ) : (
      <Alert message="Рейсов, подходящих под фильтры, не найдено" type="info" />
    );

  return (
    <div className={classes.app}>
      <header className={classes.app__header}>
        <img className={classes.app__logo} src={logo} alt="Логотип, изображение самолёта" />
      </header>
      <main className={classes.app__main}>
        <section className={classes.filters}>
          <Filters />
        </section>
        <section className={classes.tickets}>
          <SortingPanel />
          <Progress percent={stop ? 0 : (tickets.length * 100) / 10000} showInfo={false} />
          {content}
        </section>
      </main>
    </div>
  );
};

App.defaultProps = {
  tickets: [],
  searchId: null,
  fetchTickets: () => {},
  fetchId: () => {},
};

App.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  stop: PropTypes.bool.isRequired,
  searchId: PropTypes.string,
  filter: PropTypes.shape({
    isCheckedAll: PropTypes.bool,
    isCheckedNo: PropTypes.bool,
    isCheckedOne: PropTypes.bool,
    isCheckedTwo: PropTypes.bool,
    isCheckedThree: PropTypes.bool,
  }).isRequired,
  sort: PropTypes.shape({
    currentSorting: PropTypes.string,
  }).isRequired,
  fetchTickets: PropTypes.func,
  fetchId: PropTypes,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  stop: state.tickets.stop,
  searchId: state.tickets.searchId,
  filter: state.filter,
  sort: state.sort,
});

const mapDispatchToProps = (dispatch) => {
  const { fetchTickets, fetchId } = bindActionCreators(actions, dispatch);
  return {
    fetchTickets,
    fetchId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import logo from '../../images/logo.svg';
import classes from './App.module.scss';
import Ticket from "../Ticket/Ticket";
import TicketsList from "../TicketsList/TicketsList";
import SortingPanel from "../SortingList/SortingPanel";
import Filters from "../Filters/Filters";
import ServiceAPI from "../../services/backend";
import * as actions from "../../actions";

/* eslint-disable */

const App = ({tickets, stop, searchId, fetchId, fetchTickets}) => {
  
  const service = new ServiceAPI();
  
  useEffect(() => {
    if (!searchId) {
      fetchId(service);
    } else if (!stop) {
      fetchTickets(service, searchId);
    }
  }, [searchId, tickets]);
  
  const ticketsArr = [ <Ticket id={1}/>, <Ticket id={2} />, <Ticket id={3}/>, <Ticket id={4}/>, <Ticket id={5}/>];
  
  return (
    <div className={classes.app}>
      <header className={classes.app__header}>
        <img className={classes.app__logo} src={logo} alt="Логотип, изображение самолёта"/>
      </header>
      <main className={classes.app__main}>
        <section className={classes.filters}>
          <Filters/>
        </section>
        <section className={classes.tickets}>
          <SortingPanel />
          <TicketsList list={ticketsArr}/>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    stop: state.tickets.stop,
    searchId: state.tickets.searchId
  }
};

const mapDispatchToProps = (dispatch) => {
  const { fetchTickets, fetchId } = bindActionCreators(actions, dispatch);
  return {
    fetchTickets,
    fetchId
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

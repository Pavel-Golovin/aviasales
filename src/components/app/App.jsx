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

const App = (props) => {
  
  const {
    tickets,
    stop,
    searchId,
    filter,
    sort,
    fetchId,
    fetchTickets
  } = props;
  
  useEffect(() => {
    const service = new ServiceAPI();
    if (!searchId) {
      fetchId(service);
    } else if (!stop) {
      fetchTickets(service, searchId);
    }
  }, [searchId, tickets]);
  
  const filterTickets = (tickets) => {
    const { isCheckedAll, isCheckedNo, isCheckedOne, isCheckedTwo, isCheckedThree } = filter;
    if (isCheckedAll) {
      return tickets
    } else {
      let filteredTickets = [];
      if (isCheckedNo) {
        let noTransfer = tickets.filter((elem) => {
          return (elem.segments[0].stops.length === 0) || (elem.segments[1].stops.length === 0)
        })
        filteredTickets = [...filteredTickets, ...noTransfer]
      }
      if (isCheckedOne) {
        let noTransfer = tickets.filter((elem) => {
          return (elem.segments[0].stops.length === 1) || (elem.segments[1].stops.length === 1)
        })
        filteredTickets = [...filteredTickets, ...noTransfer]
      }
      if (isCheckedTwo) {
        let noTransfer = tickets.filter((elem) => {
          return (elem.segments[0].stops.length === 2) || (elem.segments[1].stops.length === 2)
        })
        filteredTickets = [...filteredTickets, ...noTransfer]
      }
      if (isCheckedThree) {
        let noTransfer = tickets.filter((elem) => {
          return (elem.segments[0].stops.length === 3) || (elem.segments[1].stops.length === 3)
        })
        filteredTickets = [...filteredTickets, ...noTransfer]
      }
      return filteredTickets
    }
  }
  
  const sortTickets = (filteredTickets) => {
    const { currentSorting } = sort;
    if (currentSorting === "cheapest") {
      return filteredTickets.sort((a, b) => a.price - b.price)
    }
    if (currentSorting === "fastest") {
      return filteredTickets.sort((a, b) =>  (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
    }
  }
  
  const renderTickets = (tickets) => tickets.slice(0,5).map((ticket, index) => <Ticket id={index} data={ticket}/>);
  
  const ticketsToBeRendered = renderTickets(sortTickets(filterTickets(tickets)));
  
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
          <TicketsList list={ticketsToBeRendered}/>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    stop: state.tickets.stop,
    searchId: state.tickets.searchId,
    filter: state.filter,
    sort: state.sort
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

import React from 'react';
import logo from '../../images/logo.svg';
import classes from './App.module.scss';
import Ticket from "../Ticket/Ticket";
import TicketsList from "../TicketsList/TicketsList";
import SortingPanel from "../SortingList/SortingPanel";
import Filters from "../Filters/Filters";

const App = () => {
  
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

export default App;

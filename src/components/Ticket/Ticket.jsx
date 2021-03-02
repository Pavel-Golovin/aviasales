import React from "react";
import classes from "./Ticket.module.scss";

const Ticket = () => { // eslint-disable-line
  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes.ticket__price}>13400 Р</p>
        <img className={classes.ticket__logo} width="110px" height="36px" src="http://pics.avs.io/99/36/S7.png" alt="Логотип авиакомпании"/>
      </header>
      <section className={classes.ticket__way}>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>MOV-HKT</h3>
          <p className={classes.ticket__description}>10:45 - 8:00</p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>В пути</h3>
          <p className={classes.ticket__description}>21ч 15м</p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>2 пересадки</h3>
          <p className={classes.ticket__description}>HKG, JMB</p>
        </div>
      </section>
      <section className={classes.ticket__way}>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>MOV-HKT</h3>
          <p className={classes.ticket__description}>11:20 - 00:50</p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>В пути</h3>
          <p className={classes.ticket__description}>13ч 30м</p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>1 пересадка</h3>
          <p className={classes.ticket__description}>HKG</p>
        </div>
      </section>
    </article>
  )
}

export default Ticket;

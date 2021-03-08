import React from "react";
import {format, add} from "date-fns"
import classes from "./Ticket.module.scss";

/* eslint-disable */

const Ticket = (props) => {
  
  const {
    data: {
      price,
      carrier,
      segments: [
        {
          origin: originTo,
          destination: destinationTo,
          date: dateTo,
          stops: stopsTo,
          duration: durationTo
        },
        {
          origin: originFrom,
          destination: destinationFrom,
          date: dateFrom,
          stops: stopsFrom,
          duration: durationFrom
        },
      ]
    }
  } = props;
  
  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes.ticket__price}>{price} Р</p>
        <img className={classes.ticket__logo} width="110px" height="36px" src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании"/>
      </header>
      <section className={classes.ticket__way}>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>{originTo}-{destinationTo}</h3>
          <p className={classes.ticket__description}>
            {format(new Date(dateTo), 'HH:mm')} - {format(add(new Date(dateTo), {minutes: durationTo}), 'HH:mm')}
          </p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>В пути</h3>
          <p className={classes.ticket__description}>
            {`${Math.floor(durationTo / 60)}ч ${durationTo % 60}м`}
          </p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>{stopsTo.length} пересадки</h3>
          <p className={classes.ticket__description}>{stopsTo.join(", ")}</p>
        </div>
      </section>
      <section className={classes.ticket__way}>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>{originFrom}-{destinationFrom}</h3>
          <p className={classes.ticket__description}>
            {format(new Date(dateFrom), 'HH:mm')} - {format(add(new Date(dateFrom), {minutes: durationFrom}), 'HH:mm')}
          </p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>В пути</h3>
          <p className={classes.ticket__description}>
            {`${Math.floor(durationFrom / 60)}ч ${durationFrom % 60}м`}
          </p>
        </div>
        <div className={classes.ticket__info}>
          <h3 className={classes.ticket__subtitle}>{stopsFrom.length} пересадки</h3>
          <p className={classes.ticket__description}>{stopsFrom.join(", ")}</p>
        </div>
      </section>
    </article>
  )
}

export default Ticket;

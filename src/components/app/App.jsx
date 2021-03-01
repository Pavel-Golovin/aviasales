import React from 'react';
import classNames from 'classnames';
import logo from '../../images/logo.svg';
import classes from './App.module.scss';


const Ticket = () => { // eslint-disable-line
  return (
    <li className={classes.tickets__item}>
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
    </li>
  )
}

const App = () => { // eslint-disable-line
  return (
    <div className={classes.app}>
      <header className={classes.app__header}>
        <img className={classes.app__logo} src={logo} alt="Логотип, изображение самолёта"/>
      </header>
      <main className={classes.app__main}>
        <section className={classes.filters}>
          <h2 className={classes.filters__title}>Количество пересадок</h2>
          <ul className={classes.filters__list}>
            <li className={classes.filters__item}>
              <input id="all" className={classes.filters__checkbox} type="checkbox" value="Все"/>
              <label className={classes.filters__label} htmlFor="all">Все</label>
            </li>
            <li className={classes.filters__item}>
              <input id="no-transfer" className="filters__checkbox" type="checkbox" value="Без пересадок" defaultChecked/>
              <label className={classes.filters__label} htmlFor="no-transfer">Без пересадок</label>
            </li>
            <li className={classes.filters__item}>
              <input id="one-transfer" className="filters__checkbox" type="checkbox" value="Одна пересадка" defaultChecked/>
              <label className={classes.filters__label} htmlFor="one-transfer">1 пересадка</label>
            </li>
            <li className={classes.filters__item}>
              <input id="two-transfer" className="filters__checkbox" type="checkbox" value="Две пересадки" defaultChecked/>
              <label className={classes.filters__label} htmlFor="two-transfer">2 пересадки</label>
            </li>
            <li className={classes.filters__item}>
              <input id="three-transfer" className="filters__checkbox" type="checkbox" value="Три пересадки"/>
              <label className={classes.filters__label} htmlFor="three-transfer">3 пересадки</label>
            </li>
          </ul>
        </section>
        <section className={classes.tickets}>
          <ul className={classes.sorting}>
            <li className={classes.sorting__item}>
              <button type="button" className={classNames(classes.sorting__button, classes["sorting__button--cheapest"], classes["sorting__button--active"])}>Самый дешевый</button>
            </li>
            <li className={classes.sorting__item}>
              <button type="button" className={classNames(classes.sorting__button, classes["sorting__button--fastest"])}>Самый быстрый</button>
            </li>
          </ul>
          <ul className={classes.tickets__list}>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

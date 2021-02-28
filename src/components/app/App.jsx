import React from 'react';
import logo from '../../images/logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <img className="app__logo" src={logo} alt="Логотип, изображение самолёта"/>
      </header>
      <main className="app__main">
        <section className="filters">
          <h2 className="filters__title">Количество пересадок</h2>
          <ul className="filters__list">
            <li className="filters__item">
              <input id="all" className="filters__checkbox" type="checkbox" value="Все"/>
              <label className="filters__label" htmlFor="all">Все</label>
            </li>
            <li className="filters__item">
              <input id="no-transfer" className="filters__checkbox" type="checkbox" value="Без пересадок" checked/>
              <label className="filters__label" htmlFor="no-transfer">Без пересадок</label>
            </li>
            <li className="filters__item">
              <input id="one-transfer" className="filters__checkbox" type="checkbox" value="Одна пересадка" checked/>
              <label className="filters__label" htmlFor="one-transfer">1 пересадка</label>
            </li>
            <li className="filters__item">
              <input id="two-transfer" className="filters__checkbox" type="checkbox" value="Две пересадки" checked/>
              <label className="filters__label" htmlFor="two-transfer">2 пересадки</label>
            </li>
            <li className="filters__item">
              <input id="three-transfer" className="filters__checkbox" type="checkbox" value="Три пересадки"/>
              <label className="filters__label" htmlFor="three-transfer">3 пересадки</label>
            </li>
          </ul>
        </section>
        <section className="tickets">
          <ul className="tickets__sorting sorting">
            <li className="sorting__item">
              <button type="button" className="sorting__button sorting__button--cheapest sorting__button--active">Самый дешевый</button>
            </li>
            <li className="sorting__item">
              <button type="button" className="sorting__button sorting__button--fastest">Самый быстрый</button>
            </li>
          </ul>
          <ul className="tickets__list">
            <li className="tickets__item">
              <article className="tickets__card ticket">
                <header className="ticket__header">
                  <p className="ticket__price">13400 Р</p>
                  <img className="ticket__logo" width="110px" height="36px" src="http://pics.avs.io/99/36/S7.png" alt="Логотип авиакомпании"/>
                </header>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">10:45 - 8:00</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">21ч 15м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">2 пересадки</h3>
                    <p className="ticket__description">HKG, JMB</p>
                  </div>
                </section>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">11:20 - 00:50</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">13ч 30м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">1 пересадка</h3>
                    <p className="ticket__description">HKG</p>
                  </div>
                </section>
              </article>
            </li>
            <li className="tickets__item">
              <article className="tickets__card ticket">
                <header className="ticket__header">
                  <p className="ticket__price">13400 Р</p>
                  <img className="ticket__logo" width="110px" height="36px" src="http://pics.avs.io/99/36/S7.png" alt="Логотип авиакомпании"/>
                </header>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">10:45 - 8:00</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">21ч 15м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">2 пересадки</h3>
                    <p className="ticket__description">HKG, JMB</p>
                  </div>
                </section>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">11:20 - 00:50</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">13ч 30м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">1 пересадка</h3>
                    <p className="ticket__description">HKG</p>
                  </div>
                </section>
              </article>
            </li>
            <li className="tickets__item">
              <article className="tickets__card ticket">
                <header className="ticket__header">
                  <p className="ticket__price">13400 Р</p>
                  <img className="ticket__logo" width="110px" height="36px" src="http://pics.avs.io/99/36/S7.png" alt="Логотип авиакомпании"/>
                </header>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">10:45 - 8:00</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">21ч 15м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">2 пересадки</h3>
                    <p className="ticket__description">HKG, JMB</p>
                  </div>
                </section>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">11:20 - 00:50</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">13ч 30м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">1 пересадка</h3>
                    <p className="ticket__description">HKG</p>
                  </div>
                </section>
              </article>
            </li>
            <li className="tickets__item">
              <article className="tickets__card ticket">
                <header className="ticket__header">
                  <p className="ticket__price">13400 Р</p>
                  <img className="ticket__logo" width="110px" height="36px" src="http://pics.avs.io/99/36/S7.png" alt="Логотип авиакомпании"/>
                </header>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">10:45 - 8:00</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">21ч 15м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">2 пересадки</h3>
                    <p className="ticket__description">HKG, JMB</p>
                  </div>
                </section>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">11:20 - 00:50</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">13ч 30м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">1 пересадка</h3>
                    <p className="ticket__description">HKG</p>
                  </div>
                </section>
              </article>
            </li>
            <li className="tickets__item">
              <article className="tickets__card ticket">
                <header className="ticket__header">
                  <p className="ticket__price">13400 Р</p>
                  <img className="ticket__logo" width="110px" height="36px" src="http://pics.avs.io/99/36/S7.png" alt="Логотип авиакомпании"/>
                </header>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">10:45 - 8:00</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">21ч 15м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">2 пересадки</h3>
                    <p className="ticket__description">HKG, JMB</p>
                  </div>
                </section>
                <section className="ticket__way">
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">MOV-HKT</h3>
                    <p className="ticket__description">11:20 - 00:50</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">В пути</h3>
                    <p className="ticket__description">13ч 30м</p>
                  </div>
                  <div className="ticket__info">
                    <h3 className="ticket__subtitle">1 пересадка</h3>
                    <p className="ticket__description">HKG</p>
                  </div>
                </section>
              </article>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import classes from "./filters.module.scss";


const Filters = () => { // eslint-disable-line
  return (
    <>
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
    </>
  )
}

export default Filters;

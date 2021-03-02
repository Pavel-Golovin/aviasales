import classNames from "classnames";
import React from "react";
import classes from "./SortingPanel.module.scss";

const SortingPanel = () => { // eslint-disable-line
  return (
    <ul className={classes.sorting}>
      <li className={classes.sorting__item}>
        <button type="button" className={classNames(classes.sorting__button, classes["sorting__button--cheapest"], classes["sorting__button--active"])}>Самый дешевый</button>
      </li>
      <li className={classes.sorting__item}>
        <button type="button" className={classNames(classes.sorting__button, classes["sorting__button--fastest"])}>Самый быстрый</button>
      </li>
    </ul>
  );
}

export default SortingPanel;

import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import classes from "./SortingPanel.module.scss";
import * as actions from "../../actions";

const SortingPanel = (props) => {
  
  const {
    currentSorting,
    sortCheapest,
    sortFastest
  } = props;
  
  const cheapestClassName = (currentSorting === "cheapest") ?
    classNames(classes.sorting__button, classes["sorting__button--cheapest"], classes["sorting__button--active"]) :
    classNames(classes.sorting__button, classes["sorting__button--cheapest"]);
  
  const fastestClassName = (currentSorting === "fastest") ?
    classNames(classNames(classes.sorting__button, classes["sorting__button--fastest"]), classes["sorting__button--active"]) :
    classNames(classNames(classes.sorting__button, classes["sorting__button--fastest"]));
  
  return (
    <ul className={classes.sorting}>
      <li className={classes.sorting__item}>
        <button
          type="button"
          className={cheapestClassName}
          onClick={sortCheapest}
        >Самый дешевый</button>
      </li>
      <li className={classes.sorting__item}>
        <button
          type="button"
          className={fastestClassName}
          onClick={sortFastest}
        >Самый быстрый</button>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({ currentSorting: state.sort.currentSorting });

const mapDispatchToProps = (dispatch) => {
  const {sortCheapest, sortFastest} = bindActionCreators(actions, dispatch);
  return {
    sortCheapest,
    sortFastest
  }
}

SortingPanel.propTypes = {
  currentSorting: PropTypes.string.isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);

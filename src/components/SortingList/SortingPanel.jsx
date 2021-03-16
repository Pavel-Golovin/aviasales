import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classes from './SortingPanel.module.scss';
import * as actions from '../../actions';

const SortingPanel = ({ currentSorting, sortCheapest, sortFastest }) => (
  <ul className={classes.sorting}>
    <li className={classes.sorting__item}>
      <button
        type="button"
        className={classNames(classes.sorting__button, classes['sorting__button--cheapest'], {
          [classes['sorting__button--active']]: currentSorting === 'cheapest',
        })}
        onClick={sortCheapest}
      >
        Самый дешевый
      </button>
    </li>
    <li className={classes.sorting__item}>
      <button
        type="button"
        className={classNames(classes.sorting__button, classes['sorting__button--fastest'], {
          [classes['sorting__button--active']]: currentSorting === 'fastest',
        })}
        onClick={sortFastest}
      >
        Самый быстрый
      </button>
    </li>
  </ul>
);

SortingPanel.propTypes = {
  currentSorting: PropTypes.string.isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ currentSorting: state.sort.currentSorting });

const mapDispatchToProps = (dispatch) => {
  const { sortCheapest, sortFastest } = bindActionCreators(actions, dispatch);
  return {
    sortCheapest,
    sortFastest,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);

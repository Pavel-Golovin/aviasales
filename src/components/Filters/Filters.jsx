import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import classes from "./filters.module.scss";
import * as actions from "../../actions";

const Filters = (props) => {
  
  const {isCheckedAll, isCheckedNo, isCheckedOne, isCheckedTwo, isCheckedThree, allChecked, noChecked, oneChecked, twoChecked, threeChecked} = props;
  
  return (
    <>
      <h2 className={classes.filters__title}>Количество пересадок</h2>
      <ul className={classes.filters__list}>
        <li key="all" className={classes.filters__item}>
          <input id="all" className={classes.filters__checkbox} type="checkbox" value="Все" onChange={allChecked} checked={isCheckedAll}/>
          <label className={classes.filters__label} htmlFor="all">Все</label>
        </li>
        <li key="no-transfer" className={classes.filters__item}>
          <input id="no-transfer" className="filters__checkbox" type="checkbox" value="Без пересадок" onChange={noChecked} checked={isCheckedNo}/>
          <label className={classes.filters__label} htmlFor="no-transfer">Без пересадок</label>
        </li>
        <li key="one-transfer" className={classes.filters__item}>
          <input id="one-transfer" className="filters__checkbox" type="checkbox" value="Одна пересадка" onChange={oneChecked} checked={isCheckedOne}/>
          <label className={classes.filters__label} htmlFor="one-transfer">1 пересадка</label>
        </li>
        <li key="two-transfer" className={classes.filters__item}>
          <input id="two-transfer" className="filters__checkbox" type="checkbox" value="Две пересадки" onChange={twoChecked} checked={isCheckedTwo}/>
          <label className={classes.filters__label} htmlFor="two-transfer">2 пересадки</label>
        </li>
        <li key="three-transfer" className={classes.filters__item}>
          <input id="three-transfer" className="filters__checkbox" type="checkbox" value="Три пересадки" onChange={threeChecked} checked={isCheckedThree}/>
          <label className={classes.filters__label} htmlFor="three-transfer">3 пересадки</label>
        </li>
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  const {filter} = state;
  return {
    isCheckedAll: filter.isCheckedAll,
    isCheckedNo: filter.isCheckedNo,
    isCheckedOne: filter.isCheckedOne,
    isCheckedTwo: filter.isCheckedTwo,
    isCheckedThree: filter.isCheckedThree
  }
}

const mapDispatchToProps = (dispatch) => {
  const { allChecked, noChecked, oneChecked, twoChecked, threeChecked } = bindActionCreators(actions, dispatch);
  return {
    allChecked,
    noChecked,
    oneChecked,
    twoChecked,
    threeChecked
  }
}

Filters.defaultProps = {
  isCheckedAll: false,
  isCheckedNo: false,
  isCheckedOne: false,
  isCheckedTwo: false,
  isCheckedThree: false,
  allChecked: () => {},
  noChecked: () => {},
  oneChecked: () => {},
  twoChecked: () => {},
  threeChecked: () => {}
  
}

Filters.propTypes = {
  isCheckedAll: PropTypes.bool,
  isCheckedNo: PropTypes.bool,
  isCheckedOne: PropTypes.bool,
  isCheckedTwo: PropTypes.bool,
  isCheckedThree: PropTypes.bool,
  allChecked: PropTypes.func,
  noChecked: PropTypes.func,
  oneChecked: PropTypes.func,
  twoChecked: PropTypes.func,
  threeChecked: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

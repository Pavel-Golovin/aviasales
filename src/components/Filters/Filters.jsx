import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import classes from "./filters.module.scss";
import * as actions from "../../actions";

/* eslint-disable */

const Filters = (props) => { // eslint-disable-line
  
  const {
    isCheckedAll,
    isCheckedNo,
    isCheckedOne,
    isCheckedTwo,
    isCheckedThree,
    allChecked
  } = props;
  
  return (
    <>
      <h2 className={classes.filters__title}>Количество пересадок</h2>
      <ul className={classes.filters__list}>
        <li key="all" className={classes.filters__item}>
          <input id="all" className={classes.filters__checkbox} type="checkbox" value="Все" onChange={allChecked} checked={isCheckedAll}/>
          <label className={classes.filters__label} htmlFor="all">Все</label>
        </li>
        <li key="no-transfer" className={classes.filters__item}>
          <input id="no-transfer" className="filters__checkbox" type="checkbox" value="Без пересадок" checked={isCheckedNo}/>
          <label className={classes.filters__label} htmlFor="no-transfer">Без пересадок</label>
        </li>
        <li key="one-transfer" className={classes.filters__item}>
          <input id="one-transfer" className="filters__checkbox" type="checkbox" value="Одна пересадка" checked={isCheckedOne}/>
          <label className={classes.filters__label} htmlFor="one-transfer">1 пересадка</label>
        </li>
        <li key="two-transfer" className={classes.filters__item}>
          <input id="two-transfer" className="filters__checkbox" type="checkbox" value="Две пересадки" checked={isCheckedTwo}/>
          <label className={classes.filters__label} htmlFor="two-transfer">2 пересадки</label>
        </li>
        <li key="three-transfer" className={classes.filters__item}>
          <input id="three-transfer" className="filters__checkbox" type="checkbox" value="Три пересадки" checked={isCheckedThree}/>
          <label className={classes.filters__label} htmlFor="three-transfer">3 пересадки</label>
        </li>
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isCheckedAll: state.isCheckedAll,
    isCheckedNo: state.isCheckedNo,
    isCheckedOne: state.isCheckedOne,
    isCheckedTwo: state.isCheckedTwo,
    isCheckedThree: state.isCheckedThree
  }
}

const mapDispatchToProps = (dispatch) => {
  const { allChecked } = bindActionCreators(actions, dispatch);
  return {
    allChecked
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

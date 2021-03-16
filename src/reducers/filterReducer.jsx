import { toggleCheckbox, toggleCheckboxAll } from '../utils/functions';

const initialState = {
  isCheckedAll: true,
  isCheckedNo: true,
  isCheckedOne: true,
  isCheckedTwo: true,
  isCheckedThree: true,
};

// eslint-disable-next-line
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CHECKED':
      return toggleCheckboxAll(state);
    case 'NO_CHECKED':
      return toggleCheckbox(state, 'isCheckedNo');
    case 'ONE_CHECKED':
      return toggleCheckbox(state, 'isCheckedOne');
    case 'TWO_CHECKED':
      return toggleCheckbox(state, 'isCheckedTwo');
    case 'THREE_CHECKED':
      return toggleCheckbox(state, 'isCheckedThree');
    default:
      return state;
  }
};

export default filterReducer;

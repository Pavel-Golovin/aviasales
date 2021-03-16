export const toggleCheckbox = (state, stateProperty) => {
  const updatedState = { ...state, [stateProperty]: !state[stateProperty] };
  return Object.entries(updatedState)
    .slice(1)
    .every((item) => item[1])
    ? { ...updatedState, isCheckedAll: true }
    : { ...updatedState, isCheckedAll: false };
};

export const toggleCheckboxAll = (state) =>
  Object.entries(state).reduce((acc, curr) => ({ ...acc, [curr[0]]: !state.isCheckedAll }), {});

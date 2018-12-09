import * as types from "../actions/actionTypes";

const visibilitySort = (state = types.SORT_ASC, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_SORT:
      return action.sortType;
    default:
      return state;
  }
};

export default visibilitySort;

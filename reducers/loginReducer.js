import {FETCH_SUCCESS, FETCH_FAILURE, FETCHING} from '../constants/constants';

const initialState = {
  user: {},
  isLoggedIn: false,
  isFetching: false,
  error: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        user: action.data,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: true,
      };
    default:
      return state;
  }
}
import {FETCH_SUCCESS, FETCH_FAILURE, FETCHING} from '../constants/constants';

const initialState = {
  user: {},
  isFetching: false,
  error: false,
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.data,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
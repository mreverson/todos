import {FETCH_SUCCESS, FETCH_FAILURE, FETCHING} from '../constants/constants';

const initialState = {
  breeds: [],
  isFetching: false,
  error: false,
};

export default function axiosReducer(state = initialState, action) {
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
        breeds: action.data,
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

import axios from 'axios';
import {FETCH_SUCCESS, FETCH_FAILURE, FETCHING} from '../constants/constants';

export function fetchBreeds() {
  return dispatch => {
    dispatch(getBreeds());
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(function(response) {
        var breed = Object.entries(response.data.message);
        console.log('1', breed);
        return dispatch(getSuccess(breed));
      })
      .catch(err => dispatch(getFailure(err)));
  };
}

function getBreeds() {
  return {
    type: FETCHING,
  };
}

function getSuccess(data) {
  console.log('3', data);
  return {
    type: FETCH_SUCCESS,
    data,
  };
}

function getFailure() {
  return {
    type: FETCH_FAILURE,
  };
}

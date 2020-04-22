import axios from 'axios';
import {FETCH_SUCCESS, FETCH_FAILURE} from '../constants/constants';

export function fetchUser(firstname, lastname, username, password) {
    console.log('2: ', username, ' : ', password)
  return dispatch => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(function(response) {
        var user = response.data.message;
        //console.log('3', user);
        return dispatch(getSuccess(user));
      })
      .catch(err => dispatch(getFailure(err)));
  };
}


function getSuccess(data) {
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

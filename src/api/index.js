import store from "../store";
import { fetch_post, receive_post, receive_error } from "../actions";

export const getData = () => {
  store.dispatch(fetch_post());
  return function (dispatch) {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
      store.dispatch(receive_post(response));
    })
    .catch(error => {
      store.dispatch(receive_error());
    });
  }
};

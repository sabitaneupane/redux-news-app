import store from "../store";
import { fetch_post, receive_post, receive_error } from "../actions/fetchAction";

export const thunk_action_creator = username => {
    const user = username.replace(/\s/g, "");
    store.dispatch(fetch_post());
    return function (dispatch, getState) {
      return fetch(`https://api.github.com/users/${user}`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            throw new Error("No such user found!!");
          } else dispatch(receive_post(data));
        })
        .catch(err => dispatch(receive_error()));
    };
  };
  
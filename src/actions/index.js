export const fetch_post = () => {
  return {
    type: "FETCH_USER"
  };
};

export const receive_post = (response) => {
  return {
    type: "FETCHED_USER",
    payload: response
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

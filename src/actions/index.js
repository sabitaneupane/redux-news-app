export const fetch_post = () => {
  return {
    type: "FETCH_NEWS"
  };
};

export const receive_post = (response) => {
  return {
    type: "FETCHED_NEWS_SUCCESS",
    payload: response
  };
};

export const receive_error = () => {
  return {
    type: "FETCHED_NEWS_FAILED"
  };
};

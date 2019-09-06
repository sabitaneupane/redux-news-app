const FETCH_NEWS = "FETCH_NEWS"
const FETCHED_NEWS_SUCCESS = "FETCHED_NEWS_SUCCESS"
const FETCHED_NEWS_FAILED = "FETCHED_NEWS_FAILED"

export const fetch_news = () => {
  return {
    type: FETCH_NEWS
  };
};

export const receive_news = (response) => {
  return {
    type: FETCHED_NEWS_SUCCESS,
    payload: response
  };
};

export const receive_error = () => {
  return {
    type: FETCHED_NEWS_FAILED
  };
};

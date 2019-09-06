const initialState = {
  postData: {},
  isLoading: false,
  isError: false,
  canViewNews: false,
};

const asyncReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "FETCH_NEWS":
      newState.postData = {};
      newState.isLoading = true;
      newState.isError = false;
      newState.canViewNews = false;
      return newState;
    case "FETCHED_NEWS_SUCCESS":
        newState.postData = action.payload;
        newState.isLoading = false;
        newState.isError = false;
        newState.canViewNews = true;
        return newState;
    case "FETCHED_NEWS_FAILED":
        newState.isLoading = false;
        newState.isError = true;
        return newState;
    default:
      return state;
  }
};

export default asyncReducer;

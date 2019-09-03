const initialState = {
  postData: {},
  isLoading: false,
  isError: false,
  canViewNews: false,
};

const asyncReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "FETCH_USER":
      newState.postData = {};
      newState.isLoading = true;
      newState.isError = false;
      newState.canViewNews = false;
      return newState;
    case "FETCHED_USER":
        newState.postData = action.payload;
        newState.isLoading = false;
        newState.isError = false;
        newState.canViewNews = true;
        return newState;
    case "RECEIVE_ERROR":
        newState.isLoading = false;
        newState.isError = true;
        return newState;
    default:
      return state;
  }
};

export default asyncReducer;

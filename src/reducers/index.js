const initialState = {
  postData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "FETCH_USER":
      newState.postData = {};
      newState.isFetching = true;
      newState.isError = false;
      return newState;
    case "FETCHED_USER":
        newState.postData = action.payload;
        newState.isFetching = false;
        newState.isError = false;
        return newState;
    case "RECEIVE_ERROR":
        newState.isFetching = false;
        newState.isError = false;
        return newState;
    default:
      return state;
  }
};

export default asyncReducer;

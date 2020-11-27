const initialState = {
  clickedValue: "",
  fetchData: [],
  headerClickedData: "",
};

const Reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "SET_BUTTON_CLICKED":
      return {
        ...currentState,
        clickedValue: action.payload,
      };
    case "SET-FETCH-DATA":
      return {
        ...currentState,
        fetchData: [action.payload],
      };
    case "SET_HEADER_BUTTON_CLICKED":
      return {
        ...currentState,
        headerClickedData: action.payload,
      };

    default:
      return currentState;
  }
};

export default Reducer;

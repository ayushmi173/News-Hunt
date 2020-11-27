const initialState = {
  clickedValue: "",
};

const Reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "SET_BUTTON_CLICKED":
      return {
          clickedValue : action.payload
      };
    default:
      return currentState;
  }
};

export default Reducer;

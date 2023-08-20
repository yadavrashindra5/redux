const initialState = 0;
const changeValue = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREASE":
        return state+1;
    case "DECREASE":
        return state-1;
    default:return state
  }
};

export default changeValue;

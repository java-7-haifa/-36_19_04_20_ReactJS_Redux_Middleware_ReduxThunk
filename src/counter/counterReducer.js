const initState = {
  count: 0,
};

export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

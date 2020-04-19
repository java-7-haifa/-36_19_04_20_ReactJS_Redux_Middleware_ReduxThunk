import { CHANGE_AUTH_STATUS } from "../actions/app.action";

const initState = {
  token: null,
};

export default function appReducer(state = initState, { type, payload }) {
  switch (type) {
    case CHANGE_AUTH_STATUS:
      return { ...state, token: payload.token };
    default:
      return state;
  }
}

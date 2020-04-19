import { CHANGE_PENDING_STATUS, SET_ERROR } from "../actions/login-page.action";

const initState = {
  pending: false,
  error: null,
};

export default function loginPageReducer(state = initState, { type, payload }) {
  switch (type) {
    case CHANGE_PENDING_STATUS:
      return { ...state, pending:payload.status, error:null};
    case SET_ERROR:
      return {...state,pending:false,error:payload.error};
    default:
      return state;
  }
}

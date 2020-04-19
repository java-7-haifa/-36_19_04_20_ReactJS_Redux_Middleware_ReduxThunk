import { login, registration } from "../../services/auth.service";
import { loginSuccessAction, loginErrorAction } from "./auth.action";

export const LOGIN = "[Login Page] login";
export const REGISTRATION = "[Login Page] registration";
export const CHANGE_PENDING_STATUS = "[Login Page] Change pending status";
export const SET_ERROR = "[Login Page] Set error";

export const loginAction = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PENDING_STATUS,
      payload: { status: true },
    });
    login(email, password)
      .then(({data}) => {
        dispatch(loginSuccessAction(data.token));
      })
      .catch(({ response }) => {          
        dispatch(loginErrorAction(response.data.message));
      });
  };
};

export const registrationAction = (email, password) => {
    return (dispatch) => {
      dispatch({
        type: CHANGE_PENDING_STATUS,
        payload: { status: true },
      });
      registration(email, password)
        .then((response) => {
          dispatch({
            type: CHANGE_PENDING_STATUS,
            payload: { status: false },
          });
          console.log('Response OK',response.data);
        })
        .catch(({ response }) => {
          dispatch({
            type: CHANGE_PENDING_STATUS,
            payload: { status: false },
          });
          console.log('Response Error',response);
        });
    };
  };

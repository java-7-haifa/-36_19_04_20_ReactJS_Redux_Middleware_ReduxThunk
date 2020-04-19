import { SET_ERROR } from "./login-page.action"
import { CHANGE_AUTH_STATUS } from "./app.action"


export const loginSuccessAction = (token) => {
    return {
        type:CHANGE_AUTH_STATUS,
        payload:{token}
    }
}

export const loginErrorAction = (error) => {
    return {
        type:SET_ERROR,
        payload:{error}
    }
}
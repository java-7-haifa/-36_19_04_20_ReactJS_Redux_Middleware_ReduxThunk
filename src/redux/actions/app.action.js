
export const CHANGE_AUTH_STATUS = '[App] Change Auth status';

export const changeAuthStatusAction = (token) => {
    return {
        type:CHANGE_AUTH_STATUS,
        payload:{token}
    }
}
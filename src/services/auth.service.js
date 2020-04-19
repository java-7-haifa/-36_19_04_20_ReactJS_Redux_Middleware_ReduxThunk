import Api from './Api';

export const login = (email,password) => {
    return Api.post('api/login',{email,password});
}

export const registration = (email,password) => {
    return Api.post('api/registration',{email,password});
}
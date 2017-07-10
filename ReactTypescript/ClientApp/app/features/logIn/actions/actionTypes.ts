import { loginAPI } from '../api/loginAPI';

export const actionTypes = {
    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL"
}


export const loginRequest = (payload: any) => {
    debugger
    const promise = loginAPI.Signin(payload);

    // promise.then(
    //     data => dispatch(someaction here)
    // );

    return promise;
}
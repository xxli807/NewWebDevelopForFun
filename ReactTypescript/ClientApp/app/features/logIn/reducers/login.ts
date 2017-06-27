
import { LoginModel } from '../../../share/models/login';
import { actionTypes } from '../actions/actionTypes';

// init state is a class (same as js object)
class LoginState {
    isUserLoggedIn:boolean;
    loginModel: LoginModel;

    public constructor() {
        this.isUserLoggedIn = false;
        this.loginModel = new LoginModel();
    }
}

export const loginReducer = (state: LoginState = new LoginState(), action: any) => {
    switch (action.type) {
        default:
        case actionTypes.LOGIN:
            return {...state};
        case actionTypes.LOGIN_SUCCESS:
            return {...state};
        case actionTypes.LOGIN_FAIL:
            return {...state};
    }
}

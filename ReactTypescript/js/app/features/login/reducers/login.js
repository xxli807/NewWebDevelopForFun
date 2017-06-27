import { LoginModel } from '../../../share/models/login';
import { actionTypes } from '../actions/actionTypes';
class LoginState {
    constructor() {
        this.isUserLoggedIn = false;
        this.loginModel = new LoginModel();
    }
}
export const loginReducer = (state = new LoginState(), action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return Object.assign({}, state);
        case actionTypes.LOGIN_SUCCESS:
            return Object.assign({}, state);
        case actionTypes.LOGIN_FAIL:
            return Object.assign({}, state);
    }
};
//# sourceMappingURL=C:/Users/xin/Documents/GitHub/NewWebDevelopForFun/ReactTypescript/mapFiles/app/features/logIn/reducers/login.js.map
import * as React from "react"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router'
import { LoginModel } from '../../../share/models/login';
import { loginRequest } from '../actions/actionTypes';

interface LoginProps extends React.Props<any> {
    loginRequest: any;
 }

function mapDispatchToProps(dispatch: any) {
 return bindActionCreators({ loginRequest }, dispatch);
}

class LoginForm extends React.Component<any, any> {
  private emailInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;

   private performSignin = () => {
    let loginInfo = new LoginModel();
    loginInfo.login = this.emailInput.value;
    loginInfo.password = this.passwordInput.value;
    debugger
    this.props.loginRequest(loginInfo);
  }

   public render() {
      return (
        <div className="panel-body">
          <form role="form">
            <fieldset>
              <div className="form-group"> 
                  <input className="form-control" placeholder="E-mail" name="email" type="text" defaultValue='' ref={(input) => { this.emailInput = input; }}/>
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="Password" name="password" type="password" defaultValue='' ref={(input) => { this.passwordInput = input; }}/>
              </div>
              <input className="btn btn-lg btn-success btn-block" value="Login" onClick={() => {this.performSignin()}}/>
            </fieldset>
          </form>
        </div>
      );
   }
};

export default connect<{}, {}, LoginProps>(null, mapDispatchToProps)(LoginForm)

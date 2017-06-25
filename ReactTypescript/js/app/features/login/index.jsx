import * as React from "react";
import './login.css';
import { Header } from './components/header';
import { Form } from './components/form';
export const Login = (props) => {
    return (<div className="container loginContainer">
      <div className="row loginPanel">
        <div className="col-md-4 col-md-offset-4 loginPanel">
          <div className="panel panel-default">
            <Header />
            <Form loginInfo={props.loginInfo}/>
          </div>
        </div>
      </div>
    </div>);
};
//# sourceMappingURL=C:/Users/xin/Documents/GitHub/NewWebDevelopForFun/ReactTypescript/mapFiles/app/features/login/index.jsx.map
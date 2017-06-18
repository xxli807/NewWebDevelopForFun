import * as React from "react"
import './login.css';
import {Header} from './components/header';
import {Form} from './components/form';
import { LoginModel } from '../../share/models/login';

interface Props {
   loginInfo : LoginModel;
}

export const Login = (props : Props) => {
  return (
    <div className="container loginContainer">
      <div className="row loginPanel">
        <div className="col-md-4 col-md-offset-4 loginPanel">
          <div className="panel panel-default">
            <Header/>
            <Form loginInfo={props.loginInfo}   />
          </div>
        </div>
      </div>
    </div>
  )
}
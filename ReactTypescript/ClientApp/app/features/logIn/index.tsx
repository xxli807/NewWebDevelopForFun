import * as React from "react"
import './login.css';
import {Header} from './components/header';
import LoginForm from './components/form';

  
export const Login = (props : any) => {
  return (
    <div className="container loginContainer">
      <div className="row loginPanel">
        <div className="col-md-4 col-md-offset-4 loginPanel">
          <div className="panel panel-default">
            <Header/>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
import * as React from "react";
export const Form = (props) => {
    return (<div className="panel-body">
      <form role="form">
        <fieldset>
          <div className="form-group"> 
              <input className="form-control" placeholder="E-mail" name="email" type="text" value=''/>
      	  </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" type="password" value=''/>
          </div>
          <input className="btn btn-lg btn-success btn-block" value="Login"/>
        </fieldset>
      </form>
    </div>);
};
//# sourceMappingURL=form.jsx.map
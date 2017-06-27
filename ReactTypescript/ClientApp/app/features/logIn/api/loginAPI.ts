
import { LoginModel } from '../../../share/models/login';

class LoginAPI {

    Signin(loginModel: LoginModel) : Promise<void> {
        const loginUrl: string = 'account/sign';
        return fetch(loginUrl)
       .then((response) => this.checkStatus(response))
       .then((response) => this.parseJSON(response))
    }

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response : Response) : any {
    return response.json();
  }

}

export const loginAPI = new LoginAPI();

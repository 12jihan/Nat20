import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserSignUp } from '../../models/UserSignUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);

  constructor() { }
  headers: any = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    'Authorization': 'Bearer your-token-here'
  });
  public sign_up(user: UserSignUp): any {
    let res;
    console.log('sign_up headers', this.headers);
    this._http.post(
      environment.users_url,
      user,
      {
        headers: this.headers
      })
      .subscribe(data => {
        console.log("response", data);
        res = data;
      });

    return res;
  }


}

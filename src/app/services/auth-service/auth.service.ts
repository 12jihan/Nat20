import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserSignUp } from '../../models/UserSignUp';
import { UserSignIn } from '../../models/UserSignIn';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);
  private _lss: LocalStorageService = inject(LocalStorageService);
  // headers: HttpHeaders = new HttpHeaders({
  //   'Access-Control-Allow-Origin': '*',
  //   'content-type': 'application/json',
  // });
  headers: any = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
    'content-type': 'application/json',
  };

  constructor() {
    console.log("headers", this.headers);
  }

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

  public sign_in(login_info: UserSignIn): Observable<any> {
    console.log('sign_up headers', login_info);
    const _req: Observable<Object> = this._http.post(
      environment.login_url,
      login_info,
      { headers: this.headers }
    )

    return _req;
  }


  public sign_out(): Observable<any> {
    console.log("signing out...");
    const user_auth: any = this._lss.get("user_auth");
    const token: string = user_auth['RefreshToken'];
    console.log("token:\n", token);

    let _headers: any = this.headers;
    _headers['Authorization'] = token;
    // _headers['Authorization'] = token;
    console.log(_headers);
    const _req: Observable<Object> = this._http.post(
      environment.logout_url,
      { method: 'basic' },
      { headers: _headers }
    )

    return _req;
  }

  public sign_out_all_devices(): Observable<any> {
    console.log("signing out...");
    const user_auth: any = this._lss.get("user_auth");
    const token: string = user_auth['RefreshToken'];
    console.log("token:\n", token);

    let _headers: any = this.headers;
    _headers['Authorization'] = token;
    // _headers['Authorization'] = token;
    console.log(_headers);
    const _req: Observable<Object> = this._http.post(
      environment.logout_url,
      { method: 'global' },
      { headers: _headers }
    )

    return _req;
  }

  public get_current_user(): Observable<any> {
    console.log("getting user");
    const _req: Observable<Object> = this._http.get(
      environment.get_current_user_url,
      { headers: this.headers }
    )

    return _req;
  }

  private build_headers(): any {

  }
}

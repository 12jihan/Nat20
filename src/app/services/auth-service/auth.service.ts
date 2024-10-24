import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { signUp } from 'aws-amplify/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: HttpClient = inject(HttpClient);

  constructor() { }

  public async sign_up(user: UserSignUp): Promise<any> {
    const _res: any = await this._http.post(environment.users_url, user);
    return '';
  }


}

import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _lss: LocalStorageService = inject(LocalStorageService);

  private _user: any = this._lss.get('nat20_user');
  private _user_id: string | undefined = this._user['user'] ? this._user['user']['id'] : undefined;

  constructor() {
    console.log("oops");
  }

  public get_user_id(): string {
    if (!this._user_id) {
      return '';
    }
    return this._user_id;
  }

  public get_user(): any {
    if (!this._user) {
      return '';
    }

    return this._user['user'];
  }

  public get_tokens(): any {
    if (!this._user['token']) {
      return '';
    }

    return this._user['token'];
  }
}

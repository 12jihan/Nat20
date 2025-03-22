import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { UserSignIn } from '../../models/UserSignIn';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first, Observable, take } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage-service/local-storage.service';

@Component({
    selector: 'nat-login',
    imports: [
        RouterLink,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  public password_shown: boolean = false;

  public form: FormGroup;
  public user_signin$: Observable<any> | undefined;

  constructor(
    private _as: AuthService,
    private _router: Router,
    private _lss: LocalStorageService,
  ) {
    this.form = new FormGroup({
      username_email: new FormControl('', []),
      password: new FormControl('', []),
    })
  }

  public show_password() {
    this.password_shown = !this.password_shown;
  }

  public async login() {
    const login_info: UserSignIn = {
      username: this.form.get('username_email')!.value,
      password: this.form.get('password')!.value,
    };

    this._as.sign_in(login_info)
      .pipe(first())
      .subscribe({
        next: (response: any) => {
          if (response.message === 'success') {
            console.log("response tokens:\n", response.token);
            const nat20_user: any = {
              tokens: response.token,
              user: response.user_data
            }
            this._lss.set("nat20_user", JSON.stringify(nat20_user));
            this._router.navigate(['/']);
          }
        },
        error: (error: Error) => {
          console.log("Error in signing in:", error);
        },
        complete: () => {
          console.log("completed");
        }
      });
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { UserSignIn } from '../../models/UserSignIn';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first, Observable, take } from 'rxjs';

@Component({
  selector: 'nat-login',
  standalone: true,
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
    private _router: Router
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
            console.log("response:", response);
            this._router.navigate(['/'])
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

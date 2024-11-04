import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { UserSignIn } from '../../models/UserSignIn';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  form: FormGroup;
  public password_shown: boolean = false;

  constructor(private _as: AuthService) {
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
    console.log("login info: ", login_info);
    const value = await this._as.sign_in(login_info);
  }
}

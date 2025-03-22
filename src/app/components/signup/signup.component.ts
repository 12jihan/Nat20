import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'nat-login',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  public signup_form: FormGroup;
  public password_shown: boolean = false;

  constructor(private _as: AuthService) {
    this.signup_form = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', []),
      email: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      phone_number: new FormControl('', []),
    });
  }

  public show_password() {
    this.password_shown = !this.password_shown;
  }

  public submit_user() {
    console.log('user submitted', this.signup_form.value);
    console.log("this is a test:", this._as.sign_up(this.signup_form.value));
  }
}

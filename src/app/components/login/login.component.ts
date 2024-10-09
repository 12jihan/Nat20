import { Component } from '@angular/core';

@Component({
  selector: 'nat-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public password_shown: boolean = false;

  public show_password() {
    this.password_shown = !this.password_shown;
  }
}

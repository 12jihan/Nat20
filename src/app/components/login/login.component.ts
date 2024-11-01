import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nat-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public password_shown: boolean = false;

  public show_password() {
    this.password_shown = !this.password_shown;
  }
}

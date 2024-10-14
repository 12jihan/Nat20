import { Component } from '@angular/core';

@Component({
  selector: 'nat-login',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {

  public password_shown: boolean = false;

  public show_password() {
    this.password_shown = !this.password_shown;
  }
}

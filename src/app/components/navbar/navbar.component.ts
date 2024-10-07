import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nat-navbar',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbar_routes: any[] = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Sign In',
      route: '/sign-in'
    },
  ];
}

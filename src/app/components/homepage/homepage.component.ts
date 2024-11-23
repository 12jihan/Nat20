import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nat-homepage',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    // this._auth.sign_up();
  }
}
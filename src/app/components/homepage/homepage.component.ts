import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nat-homepage',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  public campaigns: any = [
    {
      title: "Name of Campaign",
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: 0,
      active: true
    },
    {
      title: "Name of Campaign",
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: 1,
      active: false
    },
    {
      title: "Name of Campaign",
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: 2,
      active: true
    },
    // {
    //   title: "Name of Campaign",
    //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    //   id: 3,
    //   active: true
    // },
    // {
    //   title: "Name of Campaign",
    //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    //   id: 4,
    //   active: true
    // }
  ]

  constructor() {

  }

  ngOnInit() {
    // this._auth.sign_up();
  }
}
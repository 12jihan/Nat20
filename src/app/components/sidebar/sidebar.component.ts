import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { } from '@fortawesome/free-regular-svg-icons';
import { faBars, faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nat-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  public open: boolean = true;
  public bar: IconDefinition = faBars;
  public icon: IconDefinition = faPerson;

  ngOnInit(): void {

  }

  public open_close(): void {
    // will do the reverse currently active:
    this.open = !this.open;
  }
}

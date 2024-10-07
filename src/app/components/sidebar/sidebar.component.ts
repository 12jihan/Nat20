import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'nat-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  public open: boolean = true;

  ngOnInit(): void {

  }

  public open_close(): void {
    // will do the reverse currently active:
    this.open = !this.open;
  }
}

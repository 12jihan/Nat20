import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nat-campaigns-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './campaigns-page.component.html',
  styleUrl: './campaigns-page.component.scss'
})
export class CampaignsPageComponent {
  public campaigns: any = [];
}

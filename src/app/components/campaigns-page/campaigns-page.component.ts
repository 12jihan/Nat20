import { Component } from '@angular/core';

@Component({
  selector: 'nat-campaigns-page',
  standalone: true,
  imports: [],
  templateUrl: './campaigns-page.component.html',
  styleUrl: './campaigns-page.component.scss'
})
export class CampaignsPageComponent {
  public campaigns: any = [];
}

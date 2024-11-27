import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CampaignService } from '../../services/campaign-service/campaign.service';

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
  public recent_campaigns: any[] = [];


  private _cs: CampaignService = new CampaignService();

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
  ]

  constructor() {

  }

  ngOnInit() {
    this._cs.get_dms_campaign("04b85418-6001-70d1-5f3e-cd593597f05d").subscribe({
      next: (value) => {
        this.recent_campaigns = value.data;
        console.log(this.recent_campaigns);
      },
      error: (error) => {
        console.log("error:", error);
      }
    })
  }
}
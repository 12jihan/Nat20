import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CampaignService } from '../../services/campaign-service/campaign.service';
import { first } from 'rxjs';

@Component({
  selector: 'nat-campaigns-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './campaigns-page.component.html',
  styleUrl: './campaigns-page.component.scss'
})
export class CampaignsPageComponent implements OnInit {
  public campaigns: any = [];
  constructor(
    private _cs: CampaignService
  ) {

  }
  ngOnInit(): void {
    this.get_users_campaigns();
  }

  private get_users_campaigns() {
    this._cs.get_dms_campaign("04b85418-6001-70d1-5f3e-cd593597f05d")
      .pipe(first())
      .subscribe({
        next: (data) => {
          console.log('data:', data);
        },
        error: () => {

        }
      })
  }
}

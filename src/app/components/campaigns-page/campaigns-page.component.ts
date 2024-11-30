import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CampaignService } from '../../services/campaign-service/campaign.service';
import { first } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage-service/local-storage.service';

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
  public user_id: any;
  public campaigns: any = [];
  constructor(
    private _cs: CampaignService,
    private _lss: LocalStorageService
  ) {

  }
  ngOnInit(): void {
    this.user_id = this.get_user();
    console.log('campaignsasdasd:', this.user_id);
    this.get_users_campaigns();
  }

  private get_users_campaigns() {
    this._cs.get_dms_campaign(this.user_id)
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log('data:', response);
          if (response.data) {
            this.campaigns = response.data;
            console.log("campaigns:", this.campaigns);
          };
        },
        error: (error) => {
          console.log("error:", error);
        }
      })
  }

  private get_user() {
    const user: any = this._lss.get('nat20_user');
    console.log('user:', user);
    return user['user']['id'];
  }
}

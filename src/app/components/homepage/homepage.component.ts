import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CampaignService } from '../../services/campaign-service/campaign.service';
import { LocalStorageService } from '../../services/local-storage-service/local-storage.service';
import { UserService } from '../../services/user-service/user.service';
import { UsersCampaignsService } from '../../services/users-campaigns-service/users-campaigns.service';

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
  private _cs: CampaignService = inject(CampaignService);
  private _lss: LocalStorageService = inject(LocalStorageService);
  private _us: UserService = inject(UserService);
  private _ucs: UsersCampaignsService = inject(UsersCampaignsService);

  private _user_data: any;

  public recent_campaigns: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this._user_data = this.user_info();
    console.log("this is the users data:", this._user_data['id']);
    this._cs.get_dms_campaigns(this._user_data.id)
      .subscribe({
        next: (value) => {
          console.log("value:", value);
          if (value) {
            this.recent_campaigns = value.data;
            console.log("campaigns:", this.recent_campaigns);
          }
        },
        error: (error) => {
          console.log("error:", error);
        }
      })
  }

  private user_info() {
    const _user_data: any = this._lss.get("nat20_user");
    return _user_data['user'];
  }
}
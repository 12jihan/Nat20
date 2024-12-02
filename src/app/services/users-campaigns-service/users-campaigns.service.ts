import { inject, Injectable, OnDestroy } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';
import { CampaignService } from '../campaign-service/campaign.service';
import { UserService } from '../user-service/user.service';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersCampaignsService implements OnDestroy {
  private _cs: CampaignService = inject(CampaignService);
  private _us: UserService = inject(UserService);

  private _user_id = this._us.get_user_id();

  private state = new BehaviorSubject<any>({
    campaigns: [],
    loading: false,
    error: null
  });

  readonly campaigns$ = this.state.pipe(
    map(state => state.campaigns),
    distinctUntilChanged()
  );

  readonly loading$ = this.state.pipe(
    map(state => state.loading)
  );


  constructor() {
    this.get_campaigns();
  }

  ngOnDestroy(): void {
    console.log("this is a test of users campaign servicee");
  }

  public add_campaign(campaign: any) {
    const current_state = this.state.value;
    this.state.next({
      ...current_state,
      campaigns: [...current_state.campaigns, campaign]
    });
  }

  public update_campaign(id: string, updates: Partial<any>) {
    const current_state = this.state.value;
    const updated_campaigns = current_state.campaigns.map(
      (campaign: any) =>
        campaign.id === id ?
          { ...campaign, ...updates } :
          campaign
    );

    this.state.next({
      ...current_state,
      campaigns: updated_campaigns
    })
  };

  private get_campaigns(): any {
    this._cs.get_dms_campaigns(this._user_id).subscribe({
      next: (value) => {
        console.log("this is the thing:", value['data']);
      },
      error: () => {

      }
    })
  }

}

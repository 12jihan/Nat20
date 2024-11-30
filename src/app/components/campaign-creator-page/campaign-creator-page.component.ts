import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { CampaignService } from '../../services/campaign-service/campaign.service';
import { LocalStorageService } from '../../services/local-storage-service/local-storage.service';


@Component({
  selector: 'nat-campaign-creator-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './campaign-creator-page.component.html',
  styleUrl: './campaign-creator-page.component.scss'
})
export class CampaignCreatorPageComponent implements OnInit {
  private _lss: LocalStorageService = inject(LocalStorageService);
  private user_data: any;

  public form: FormGroup;
  public privacy: boolean = true;

  constructor(
    private _cs: CampaignService
  ) {
    this.user_data = this.user_info();
    console.log("user:", this.user_data['id']);
    this.form = new FormGroup({
      dm_id: new FormControl(this.user_data['id'], []),
      title: new FormControl('', []),
      start_date: new FormControl('', []),
      description: new FormControl('', []),
      current_players: new FormControl('', []),
      private_campaign: new FormControl(this.privacy, [])
    });
  }

  ngOnInit(): void {
  }

  public set_privacy(value: any) {
    this.privacy = value;
    this.form.controls['private_campaign'].setValue(this.privacy);
  }

  public submit() {
    console.log("submiting created campaign:", this.form.value);
    this.create_campaign();
  }

  public cancel() {
    console.log("canceled campaign creation");
  }

  private create_campaign() {
    this._cs.create_campaign(this.form.value)
      .subscribe({
        next: (value: any) => {
          console.log("creating campaign:", value);
        },
        error: (error: any) => {
          console.log("error creating campaign:", error);
        }
      })
  }

  private user_info() {
    const _user_data: any = this._lss.get("nat20_user");
    return _user_data['user'];
  }

}

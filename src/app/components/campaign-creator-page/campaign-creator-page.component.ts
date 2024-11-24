import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { CampaignService } from '../../services/campaign-service/campaign.service';


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

  public form: FormGroup;
  public privacy: boolean = true;
  private user_info: any;

  constructor(
    private _cs: CampaignService
  ) {
    this.form = new FormGroup({
      dm_id: new FormControl('04b85418-6001-70d1-5f3e-cd593597f05d', []),
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

}

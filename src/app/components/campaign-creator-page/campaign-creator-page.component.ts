import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

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
export class CampaignCreatorPageComponent {

  public form: FormGroup;
  public privacy: boolean = true;

  private user_info: any;

  constructor() {
    this.form = new FormGroup({
      dm_id: new FormControl('', []),
      campaign_id: new FormControl('', []),
      title: new FormControl('', []),
      start_date: new FormControl('', []),
      description: new FormControl('', []),
      current_players: new FormControl(Date.now(), []),
      date_modified: new FormControl(Date.now(), []),
    });
  }

  public set_privacy(value: any) {
    this.privacy = value;
  }

  public submit() {
    console.log("submiting created campaign:", this.form.value);
  }

  public cancel() {
    console.log("canceled campaign creation");
  }

}

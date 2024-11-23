import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCreatorPageComponent } from './campaign-creator-page.component';

describe('CampaignCreatorPageComponent', () => {
  let component: CampaignCreatorPageComponent;
  let fixture: ComponentFixture<CampaignCreatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignCreatorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

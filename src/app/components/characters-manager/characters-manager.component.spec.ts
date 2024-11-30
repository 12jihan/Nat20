import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersManagerComponent } from './characters-manager.component';

describe('CharactersManagerComponent', () => {
  let component: CharactersManagerComponent;
  let fixture: ComponentFixture<CharactersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

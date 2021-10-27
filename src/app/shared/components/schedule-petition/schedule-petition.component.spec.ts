import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePetitionComponent } from './schedule-petition.component';

describe('SchedulePetitionComponent', () => {
  let component: SchedulePetitionComponent;
  let fixture: ComponentFixture<SchedulePetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

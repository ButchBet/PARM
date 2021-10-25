import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePanelPagesComponent } from './frame-panel-pages.component';

describe('FramePanelPagesComponent', () => {
  let component: FramePanelPagesComponent;
  let fixture: ComponentFixture<FramePanelPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramePanelPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePanelPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

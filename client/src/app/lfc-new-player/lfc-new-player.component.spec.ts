import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcNewPlayerComponent } from './lfc-new-player.component';

describe('LfcNewPlayerComponent', () => {
  let component: LfcNewPlayerComponent;
  let fixture: ComponentFixture<LfcNewPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcNewPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcNewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

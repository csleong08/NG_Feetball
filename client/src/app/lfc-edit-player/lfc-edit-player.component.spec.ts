import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcEditPlayerComponent } from './lfc-edit-player.component';

describe('LfcEditPlayerComponent', () => {
  let component: LfcEditPlayerComponent;
  let fixture: ComponentFixture<LfcEditPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcEditPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcEditPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

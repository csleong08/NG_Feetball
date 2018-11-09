import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcHomeComponent } from './lfc-home.component';

describe('LfcHomeComponent', () => {
  let component: LfcHomeComponent;
  let fixture: ComponentFixture<LfcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

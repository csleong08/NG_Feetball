import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcPlayersComponent } from './lfc-players.component';

describe('LfcPlayersComponent', () => {
  let component: LfcPlayersComponent;
  let fixture: ComponentFixture<LfcPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

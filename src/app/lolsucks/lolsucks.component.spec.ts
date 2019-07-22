import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolsucksComponent } from './lolsucks.component';

describe('LolsucksComponent', () => {
  let component: LolsucksComponent;
  let fixture: ComponentFixture<LolsucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolsucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolsucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

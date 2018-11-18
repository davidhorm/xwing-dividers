import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBackComponent } from './front-back.component';

describe('FrontBackComponent', () => {
  let component: FrontBackComponent;
  let fixture: ComponentFixture<FrontBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

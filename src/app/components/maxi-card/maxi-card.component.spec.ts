import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxiCardComponent } from './maxi-card.component';

describe('MaxiCardComponent', () => {
  let component: MaxiCardComponent;
  let fixture: ComponentFixture<MaxiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaxiCardComponent } from './maxi-card.component';

describe('MaxiCardComponent', () => {
  let component: MaxiCardComponent;
  let fixture: ComponentFixture<MaxiCardComponent>;

  beforeEach(waitForAsync(() => {
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

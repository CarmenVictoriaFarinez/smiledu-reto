import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcordionsComponent } from './acordions.component';

describe('AcordionsComponent', () => {
  let component: AcordionsComponent;
  let fixture: ComponentFixture<AcordionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

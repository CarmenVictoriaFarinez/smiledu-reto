import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BtnFabsComponent } from './btn-fabs.component';

describe('BtnFabsComponent', () => {
  let component: BtnFabsComponent;
  let fixture: ComponentFixture<BtnFabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionsComponent } from './acordions.component';

describe('AcordionsComponent', () => {
  let component: AcordionsComponent;
  let fixture: ComponentFixture<AcordionsComponent>;

  beforeEach(async(() => {
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

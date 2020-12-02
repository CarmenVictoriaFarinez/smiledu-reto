import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpansionStudentComponent } from './expansion-student.component';

describe('ExpansionStudentComponent', () => {
  let component: ExpansionStudentComponent;
  let fixture: ComponentFixture<ExpansionStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-student',
  templateUrl: './expansion-student.component.html',
  styleUrls: ['./expansion-student.component.scss']
})
export class ExpansionStudentComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordions',
  templateUrl: './acordions.component.html',
  styleUrls: ['./acordions.component.scss']
})
export class AcordionsComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}

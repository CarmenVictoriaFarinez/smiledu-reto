import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}

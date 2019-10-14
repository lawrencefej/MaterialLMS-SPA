import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-prevent-unsaved',
  templateUrl: './prevent-unsaved.component.html',
  styleUrls: ['./prevent-unsaved.component.css']
})
export class PreventUnsavedComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<PreventUnsavedComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  discard() {
    this.dialog.closeAll();
  }

}

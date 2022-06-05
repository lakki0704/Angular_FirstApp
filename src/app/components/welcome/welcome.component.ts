import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
  }

}




// export class DialogAnimationsExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
//     this.dialog.open(DialogAnimationsExampleDialog, {
//       width: '250px',
//       enterAnimationDuration,
//       exitAnimationDuration,
//     });
//   }
// }
@Component({
  selector: 'app-welcome',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
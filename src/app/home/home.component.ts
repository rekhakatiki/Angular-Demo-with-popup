import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }
  ngOnInit() {
  }
  details() {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        message: "Prices will be reveiled once the sale starts",
        buttonText: {
          cancel: 'Ok'
        }
      },
      width: '50%',
      height: '30%'
    })
  }
}

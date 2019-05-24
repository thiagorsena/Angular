import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-validar-foto',
  templateUrl: './validar-foto.component.html',
  styleUrls: ['./validar-foto.component.css']
})
export class ValidarFotoComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  fecharDialog() {
    this.dialog.closeAll();
  }

}

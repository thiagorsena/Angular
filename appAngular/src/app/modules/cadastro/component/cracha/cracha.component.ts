import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cracha',
  templateUrl: './cracha.component.html',
  styleUrls: ['./cracha.component.css']
})
export class CrachaComponent implements OnInit {
  form: FormGroup;
  // nome = new FormControl(this.data.dados.nome);
  // cpf = new FormControl(this.data.dados.cpf);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}

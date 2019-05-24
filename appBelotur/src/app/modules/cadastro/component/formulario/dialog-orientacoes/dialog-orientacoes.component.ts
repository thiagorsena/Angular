import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-orientacoes',
  templateUrl: './dialog-orientacoes.component.html',
  styleUrls: ['./dialog-orientacoes.component.css']
})
export class DialogOrientacoesComponent implements OnInit {
  form: FormGroup;
  nome = new FormControl(this.data.dados.nome);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // this.onAtualizar();
    this.onVoltar();
  }

  // Atualizar Component
  onAtualizar() {
    location.reload();
  }

  // Voltar para o Component anterior
  onVoltar() {
    this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
  }

}

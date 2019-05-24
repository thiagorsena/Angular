import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-dialog-orientacoes',
  templateUrl: './dialog-orientacoes.component.html',
  styleUrls: ['./dialog-orientacoes.component.css']
})
export class DialogOrientacoesComponent implements OnInit {
  form: FormGroup;
  nome = new FormControl(this.data.dados.nome);
  cpf = new FormControl(this.data.dados.cpf);
  numeroRegistro = new FormControl(localStorage.getItem('numRegistro'));

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formularioService: FormularioService,
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // this.onAtualizar();
    this.onVoltar();
    localStorage.removeItem('numeroRegistro');
  }

  listarNumRegistro() {

  }

  // Atualizar Component
  onAtualizar() {
    location.reload();
  }

  // Voltar para o Component anterior
  onVoltar() {
    this.router.navigate(['/app/cadastro/relacao-cadastros'], { relativeTo: this.activatedRoute });
  }

}

import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletar-cadastro',
  templateUrl: './deletar-cadastro.component.html',
  styleUrls: ['./deletar-cadastro.component.css']
})
export class DeletarCadastroComponent implements OnInit {

  titulo = 'Deletar Cadastro';
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formularioService: FormularioService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.data.dados.id],
      cpf: [this.data.dados.cpf, Validators.required],
    });
  }

  // Editar cadastro
  deletarCadastro(): void {
    this.formularioService
      .deletarDados(this.data.dados.id)
      .subscribe((res) => {
        this.onAtualizar();
      });
  }

  // Atualizar Component
  onAtualizar() {
    location.reload();
  }

}

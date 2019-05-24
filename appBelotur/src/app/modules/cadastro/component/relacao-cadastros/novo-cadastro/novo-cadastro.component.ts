import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Formulario } from '../../../../../models/formulario';
import { FormularioService } from './../../../../../services/formulario.service';
import { Router, ActivatedRoute } from '@angular/router';

// Upload dos arquivos
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.css']
})
export class NovoCadastroComponent implements OnInit {
  titulo = 'Ficha de Cadastro';
  cpfUsado = false;

  // Dados do Formulário
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  public dadosFormulario: Formulario;
  data: [null];
  formulario: FormGroup;
  form: FormGroup;
  hide = false;
  private subs = new Subject();
  dataSource: MatTableDataSource<Formulario>;
  // dados: Formulario;

  // Upload dos arquivos
  public uploader: FileUploader = new FileUploader({ url: URL });
  // tslint:disable-next-line:no-inferrable-types
  public hasBaseDropZoneOver: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  public hasAnotherDropZoneOver: boolean = false;

  constructor(
    // Serviços
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    // Voltar para Rota
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.dadosFormulario = new Formulario();
  }

  ngOnInit() {
    // Metodos e construção do Formulario
    this.getDados();
    this.form = this.formBuilder.group({
      nome: [null],
      rg: [null],
      cpf: [null, Validators.required],
      nacionalidade: [null],
      cidade: [null],
      endereco: [null],
      bairro: [null],
      cep: [null],
      nomeMae: [null],
      nomePai: [null],
      dataNascimento: [null],
      sexo: [null],
      telefone: [null],
      celular: [null],
      email: [null],
      foto: [null],
      anexo1: [null],
      anexo2: [null],
      anexo3: [null],
      qr: [null],
    });
    // this.form = this.formBuilder.group({
    //   File: [null],
    // });
    this.popularTabela(this.dadosFormulario);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    this.validarCpf();
  }

  // Metodo para listar todos os Cadastros
  getDados() {
    this.formularioService.getDados().subscribe(res => {
      this.dadosFormulario = res;
      console.log(this.dadosFormulario);
    });
  }

  cadastrarDados(form) {
    console.log(this.formularioService.cadastrarDados(this.form.value));
    this.formularioService
      .cadastrarDados(this.form.value)
      .pipe(takeUntil(this.subs))
      .subscribe(res => {});
      this.onVoltar();
      this.onAtualizar();
  }

  popularTabela(dados: any): void {
    this.dataSource = new MatTableDataSource(dados);
    this.dataSource.paginator = this.paginator;
  }

  // Metodo para enviar os dados
  // onSubmit() {
  //   this.formularioService.editarDados(this.formulario.value)
  //   .subscribe(res => this.openSnackBar('Alteração Feita com Sucesso'));
  // }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 4000,
    });
  }

  // Upload de arquivos
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  // Atualizar Component
  onAtualizar() {
    location.reload();
  }

  // Voltar para o Component anterior
  onVoltar() {
    this.router.navigate(['/app/cadastro/relacao-cadastros'], { relativeTo: this.activatedRoute });
  }

  validarCpf() {
    const { cpf } = this.form.value;
    this.formularioService.getDados().subscribe(resp => {
      if (resp) {
        for (let i = 0; i < resp.length; i++) {
          this.dadosFormulario[i] = resp[i].cpf;
          if (cpf === resp[i].cpf) {
            alert('CPF já cadastrado!');
            this.form.patchValue({
              cpf: null,
            });
          }
        }
      }
    });
  }

  validarCep() {
    const { cep } = this.form.value;
    this.formularioService.validarCep(cep).subscribe(resp => {
      if (resp) {
        this.dadosFormulario = resp;
        this.form.patchValue({
          endereco: resp.logradouro,
          bairro: resp.bairro,
          cidade: resp.localidade,
        });
        console.log(this.dadosFormulario);
      }
    });
  }
}

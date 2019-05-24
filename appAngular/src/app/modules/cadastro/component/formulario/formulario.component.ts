import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { Subject } from 'rxjs';
import { takeUntil, isEmpty, delay } from 'rxjs/operators';

import { Formulario } from '../../../../models/formulario';
import { FormularioService } from './../../../../services/formulario.service';
import { DialogOrientacoesComponent } from './dialog-orientacoes/dialog-orientacoes.component';
import { CrachaComponent } from '../cracha/cracha.component';
import { EditarCadastroComponent } from '../relacao-cadastros/editar-cadastro/editar-cadastro.component';
import { WebCamComponent } from '../web-cam/web-cam.component';

// Upload dos arquivos
// const URL = '/api/';
const URL = 'http://192.168.80.209:3000/api/ambulantes/anexos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  titulo = 'Ficha de Cadastro';
  atendenteCpf = localStorage.getItem('cpfLogado');

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
  public uploader: FileUploader = new FileUploader({ url: URL, autoUpload: true });
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
    public webCamComponent: WebCamComponent
  ) {
    this.dadosFormulario = new Formulario();
  }

  ngOnInit() {
    // Metodos e construção do Formulario
    this.getDados();
    this.form = this.formBuilder.group({
      nome: [null],
      primeiroCadastro: [null, Validators.required],
      rg: [null],
      cpf: [null, Validators.required],
      nomeMae: [null],
      nomePai: [null],
      dataNascimento: [null],
      sexo: [null],
      cep: [null],
      numero: [null, Validators.required],
      complemento: [null],
      uf: [null],
      cidade: [null],
      endereco: [null],
      bairro: [null],
      telefone: [null],
      celular: [null],
      email: [null],
      escolaridade: [null],
      estadoCivil: [null],
      profissao: [null],
      foto: [localStorage.getItem('foto')],
      anexo1: [null],
      anexo2: [null],
      anexo3: [null],
      anexo4: [null],
      qr: [null],
      atendenteCpf: [this.atendenteCpf],
      // dataCadastro: [getLocaleDateTimeFormat]
    });
    // this.form = this.formBuilder.group({
    //   File: [null],
    // });
    this.popularTabela(this.dadosFormulario);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    localStorage.removeItem('foto');
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  // Metodo para listar todos os Cadastros
  getDados() {
    this.formularioService.getDados().subscribe(res => {
      this.dadosFormulario = res;
      console.log(this.dadosFormulario);
    });
  }

  cadastrarDados(form) {
    // const { cpfForm } = this.form.value;
    // this.capturarFoto();
    // this.formularioService
    //   .cadastrarDados(this.form.value)
    //   .pipe(takeUntil(this.subs))
    //   .subscribe(res => {
    //     console.log(res);
    //   });
    // setTimeout(() => {
    //     this.listarNumRegistro(cpfForm);
    //     this.openDialog(form);
    // }, 5000);
    console.log(form);
  }

  capturarFoto() {
    this.form.patchValue({
      foto: localStorage.getItem('foto'),
    });
  }

  listarNumRegistro(cpfForm) {
    this.formularioService.getByCpf(cpfForm)
    .subscribe(res => {
      localStorage.setItem('numRegistro', res);
      console.log(res);
    });
    console.log('nao gerou num registro');
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

  openDialog(model): void {
    const dialogRef = this.dialog.open(DialogOrientacoesComponent, {
      data: {
        dados: model,
      },
      minWidth: '400px',
      maxHeight: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  abrirCracha(model): void {
    this.dialog.open(CrachaComponent, {
      data: {
        dados: model,
      },
      // minWidth: '100%',
      // maxHeight: '100%',
      minWidth: '85%',
      maxHeight: '680px',
    });
  }

  abrirEditar(model): void {
    this.dialog.open(EditarCadastroComponent, {
      data: {
        dados: model,
      },
      // minWidth: '100%',
      // maxHeight: '100%',
      minWidth: '95%',
      maxHeight: '680px',
    });
  }

  validarCpf() {
    const { cpf } = this.form.value;
    this.formularioService.validarCpf(cpf)
    .subscribe(resp => {
      if (resp) {
        console.log(resp);
      }
      console.log(resp);
    });
    this.formularioService.getDados()
    .subscribe(resp => {
      if (resp) {
        for (let i = 0; i < resp.length; i++) {
          this.dadosFormulario[i] = resp[i].cpf;
          if (cpf === resp[i].cpf) {
            alert('CPF JÁ CADASTRADO!');
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
      if ((resp.localidade === 'Belo Horizonte')) {
        this.dadosFormulario = resp;
        this.form.patchValue({
          endereco: resp.logradouro,
          bairro: resp.bairro,
          cidade: resp.localidade,
          uf: resp.uf,
        });
        console.log(this.dadosFormulario);
      } else {
        this.form.patchValue({
          cep: null,
        });
        alert('CEP NÃO PERTENCE A BELO HORIZONTE');
      }
    });
  }

//   saveImages() {
//     const fileCount: number = this.uploader.queue.length;
//     if (fileCount > 0) {
//     this.uploader.queue.forEach((val, i, array) => {
//         const fileReader = new FileReader();
//         fileReader.onloadend = (e) => {
//             const imageData = fileReader.result;
//             let rawData = imageData.slice('base64,');
//             if (rawData.length > 1) {
//                 rawData = rawData[1];
//             }
//         };
//         fileReader.readAsDataURL(val._file);
//     });
// }
// }

}

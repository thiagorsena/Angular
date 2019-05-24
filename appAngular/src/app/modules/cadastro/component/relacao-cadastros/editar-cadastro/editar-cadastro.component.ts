import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Formulario } from '../../../../../models/formulario';
import { FormularioService } from './../../../../../services/formulario.service';
import { environment } from 'src/environments/environment';

// Local para Upload dos arquivos
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit {

  titulo = 'Visualizar Cadastro';
  private apiUrl = environment.apiUrl;
  public permissaoEditar = true;

  // Dados do Formulário
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public dadosFormulario: Formulario;
  formulario: FormGroup;
  form: FormGroup;
  hide = false;
  private subs = new Subject();
  dataSource: MatTableDataSource<Formulario>;
  dados: Formulario[] = this.data.array;

  // Upload dos arquivos
  public uploader: FileUploader = new FileUploader({ url: URL, removeAfterUpload: false, autoUpload: true });
  // tslint:disable-next-line:no-inferrable-types
  public hasBaseDropZoneOver: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  public hasAnotherDropZoneOver: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    // Serviços
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // Metodos e construção do Formulario (this.data.dados traz as informações da relacao de cadastros)
    this.getDados();
    this.form = this.formBuilder.group({
      // id: [this.data.dados.id],
      nome: [this.data.dados.nome],
      primeiroCadastro: [this.data.dados.primeiroCadastro],
      rg: [this.data.dados.rg],
      cpf: [this.data.dados.cpf, Validators.required],
      nomeMae: [this.data.dados.nomeMae],
      nomePai: [this.data.dados.nomePai],
      dataNascimento: [this.data.dados.dataNascimento],
      sexo: [this.data.dados.sexo],
      cep: [this.data.dados.cep],
      numero: [this.data.dados.numero],
      complemento: [this.data.dados.complemento],
      uf: [this.data.dados.uf],
      cidade: [this.data.dados.cidade],
      endereco: [this.data.dados.endereco],
      bairro: [this.data.dados.bairro],
      telefone: [this.data.dados.telefone],
      celular: [this.data.dados.celular],
      email: [this.data.dados.email],
      escolaridade: [this.data.dados.escolaridade],
      estadoCivil: [this.data.dados.estadoCivil],
      profissao: [this.data.dados.profissao],
      foto: [this.data.dados.foto],
      anexo1: [this.data.dados.anexo1],
      anexo2: [this.data.dados.anexo2],
      anexo3: [this.data.dados.anexo3],
      qr: [this.data.dados.qr],
    });
    this.popularTabela(this.dados);
  }

  // Metodo para listar todos os Cadastros
  getDados() {
    this.formularioService.getDados().subscribe(res => {
      this.dadosFormulario = res;
      // this.form.setValue({
        // id: this.dadosFormulario.id,
        // nome: this.dadosFormulario.nome,
        // rg: this.dadosFormulario.rg,
        // cpf: this.dadosFormulario.cpf,
        // nacionalidade: this.dadosFormulario.nacionalidade,
        // cidade: this.dadosFormulario.cidade,
        // endereco: this.dadosFormulario.endereco,
        // bairro: this.dadosFormulario.bairro,
        // cep: this.dadosFormulario.cep,
        // nomeMae: this.dadosFormulario.nomeMae,
        // nomePai: this.dadosFormulario.nomePai,
        // dataNascimento: null,
        // sexo: this.dadosFormulario.sexo,
        // telefoneFixo: this.dadosFormulario.telefone,
        // telefoneCelular: this.dadosFormulario.telefone,
        // email: this.dadosFormulario.email,
        // foto: this.dadosFormulario.foto,
        // anexo1: null,
        // anexo2: null,
        // anexo3: null,
        // qr: null,
      // });
      console.log(this.dadosFormulario);
    });
  }

  // Editar cadastro
  editarDados(form) {
    console.log(this.form.value);
    this.formularioService
      .editarDados(this.data.dados.id, this.form.value)
      .pipe(takeUntil(this.subs))
      .subscribe((res) => {
      });
      this.onAtualizar();
  }

  gerarAnexos() {
    console.log(this.data.dados.cpf);
    // location.replace('http://192.168.80.209:3000/api/ambulantes/pdf/' + row.cpf);
    window.open(this.apiUrl + 'ambulantes/anexo1/' + this.data.dados.cpf,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  // VALIDA A PERMISSÃO DE ADM PARA EDITAR
  validarEditar() {
    this.permissaoEditar = false;
  }

  // VALIDAR CPF
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
    this.formularioService.validarCep(cep)
      .subscribe(
        resp => {
          if (resp) {
            this.dadosFormulario = resp;
            this.form.patchValue({
              endereco: resp.logradouro,
              bairro: resp.bairro,
              cidade: resp.localidade,
              complemento: resp.complemento,
              uf: resp.uf,
            });
            console.log(this.dadosFormulario);
          } else {
            alert('CEP não encontrado');
          }
        });
  }

  popularTabela(dados: any): void {
    this.dataSource = new MatTableDataSource(dados);
    this.dataSource.paginator = this.paginator;
  }

  // Atualizar Component
  onAtualizar() {
    location.reload();
  }

  // Voltar para o Component anterior
  onVoltar() {
    this.router.navigate(['/app/cadastro/relacao-cadastros'], { relativeTo: this.activatedRoute });
  }

  // Upload de Arquivos
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}

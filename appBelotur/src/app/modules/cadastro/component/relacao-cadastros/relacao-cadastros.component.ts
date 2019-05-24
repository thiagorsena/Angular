import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';

import { Formulario } from './../../../../models/formulario';
import { FormularioService } from '../../../../services/formulario.service';
import { EditarCadastroComponent } from './editar-cadastro/editar-cadastro.component';
import { DeletarCadastroComponent } from './deletar-cadastro/deletar-cadastro.component';

@Component({
  selector: 'app-relacao-cadastros',
  templateUrl: './relacao-cadastros.component.html',
  styleUrls: ['./relacao-cadastros.component.css']
})
export class RelacaoCadastrosComponent implements OnInit {

  titulo = 'Relação de Cadastros';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  form: FormGroup;
  private subs = new Subject();
  dataSource: MatTableDataSource<Formulario>;
  displayedColumns = ['Selecao', 'Id', 'Nome', 'Cpf', 'Status', 'Editar', 'Excluir' ];
  selection = new SelectionModel<Formulario>(true, []);
  formulario: Formulario[] = [];
  public dadosFormulario: Formulario;


  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
   }

  ngOnInit() {
    // Metodos e construção do Formulario
    this.listarDados();
    this.getDados();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
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

  abrirAlterarContato(model): void {
    this.dialog.open(EditarCadastroComponent, {
      data: {
        dados: model
      },
      // minWidth: '90%',
      // maxHeight: '100%',
      minWidth: '1024px',
      maxHeight: '700px',
    });
  }

  deletarContato(model) {
    const dialogExluir = this.dialog.open(DeletarCadastroComponent, {
      data: {
        dados: model
      },
      minWidth: '400px',
      maxHeight: '40vh'
    });
    dialogExluir.afterClosed().subscribe(resposta => {
      this.onAtualizar();
    });
  }

  listarDados(): void {
    this.formularioService
      .getDados()
      .pipe(takeUntil(this.subs))
      .subscribe((res) => {
        this.dadosFormulario = res;
        this.popularTabela(res);
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  popularTabela(dados: any): void {
    this.dataSource = new MatTableDataSource(dados);
    this.dataSource.paginator = this.paginator;
  }

  onFiltrar(value: string): void {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = value;
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

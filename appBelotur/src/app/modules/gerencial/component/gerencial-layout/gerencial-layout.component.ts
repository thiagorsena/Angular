import { Component, OnInit, ViewChild } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { FormularioService } from '../../../../services/formulario.service';
import { Formulario } from '../../../../models/formulario';

@Component({
  selector: 'app-gerencial-layout',
  templateUrl: './gerencial-layout.component.html',
  styleUrls: ['./gerencial-layout.component.css']
})
export class GerencialLayoutComponent implements OnInit {

  titulo = 'Painel de Gestão';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subs = new Subject();
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = ['Selecao', 'id', 'nome', 'cpf', 'tipo', 'email', 'Editar', 'Excluir'];
  dataSource: MatTableDataSource<Formulario>;
  public dadosFormulario: Formulario;

  constructor(
    private formularioService: FormularioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  // Listar todos os usuarios cadastrados
  listarUsuarios(): void {
    this.formularioService
      .listarUsuarios()
      .pipe(takeUntil(this.subs))
      .subscribe((res) => {
        this.dadosFormulario = res;
        this.popularTabela(res);
        console.log(res);
      });
  }

  // popular tabela
  popularTabela(dados: any): void {
    this.dataSource = new MatTableDataSource(dados);
    this.dataSource.paginator = this.paginator;
  }

  editarPermissao() {
  }

  deletarUsuario() {
    alert('Você não possui permissões para excluir usuários!');
  }

  // Selecionar dado unico
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Selecionar dados
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // Filtrar dados
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {
  titulo = 'Painel de Gestão';

  constructor() { }

  ngOnInit() {
  }

}

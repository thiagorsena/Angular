import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  titulo = 'Download';
  private apiUrl = environment.apiUrl;

  constructor(
  ) { }

  ngOnInit() {
  }

  gerarRelatorio() {
    location.replace(this.apiUrl + 'ambulantes/relatorio');
  }

  gerarRelatorioPdf() {
    window.open(this.apiUrl + 'ambulantes/pdf/all',
      '_blank' // <- This is what makes it open in a new window.
    );
  }

}

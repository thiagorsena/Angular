import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

import { environment } from '../../environments/environment';
import { Formulario } from '../models/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl = environment.apiUrl;
  // private apiUrl = 'http://5b644de0923c0500144a27d8.mockapi.io/';
  // private apiUrl = 'https://webapibhresolve20181031110915.azurewebsites.net/api/';

  // Define o Tipo de Conteudo do body
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  // Listar todos os cadastros realizados
  getDados(): Observable<any> {
    // return this._http.get<Formulario>(this.apiUrl + 'users')
    return this._http.get<any>(this.apiUrl + 'ambulantes')
    .pipe(catchError(this.handleError));
  }

  // Pegar um ambulante pelo id
  getById(id: any): Observable<any> {
    // const params = new HttpParams().set('dados', dados);
    // return this._http.delete<any>(this.apiUrl + 'users/' + id)
    return this._http.get<any>(this.apiUrl + 'ambulantes/' + id)
      .pipe(catchError(this.handleError));
  }

  // Pegar um ambulante pelo CPF
  getByCpf(cpf: any): Observable<any> {
    // const params = new HttpParams().set('dados', dados);
    // return this._http.delete<any>(this.apiUrl + 'users/' + id)
    return this._http.get<any>(this.apiUrl + 'ambulantes/' + cpf)
      .pipe(catchError(this.handleError));
  }

  // Realizar novo cadastro
  cadastrarDados(cpf: string): Observable<any> {
    // const params = new HttpParams().set('dados', cpf);
    // return this._http.post<any>(this.apiUrl + 'users', cpf)
    return this._http.post<any>(this.apiUrl + 'ambulantes/', cpf)
    .pipe(catchError(this.handleError));
  }

  // Editar cadastro
  editarDados(id: any, dados: any): Observable<any> {
    // const params = new HttpParams().set('dados', dados);
    // return this._http.put<any>(this.apiUrl + 'users/' + id, dados)
    return this._http.put<any>(this.apiUrl + 'ambulantes/' + id, dados)
      .pipe(catchError(this.handleError));
  }

  // Deletar cadastro
  deletarDados(id: any): Observable<any> {
    // const params = new HttpParams().set('dados', dados);
    // return this._http.delete<any>(this.apiUrl + 'users/' + id)
    return this._http.delete<any>(this.apiUrl + 'ambulantes/' + id)
      .pipe(catchError(this.handleError));
  }

  // Validar Cpf
  validarCpf(cpf: any): Observable<any> {
    return this._http.get<any>(this.apiUrl + 'ambulantes/cpf/' + cpf)
    .pipe(catchError(this.handleError));
  }

  // Validar Cep
  validarCep(cep: any): Observable<any> {
    return this._http.get<any>('https://viacep.com.br/ws/' + cep + '/json/');
    // .pipe(catchError(this.handleError));
  }

  // Listar todos os usuarios cadastrados
  listarUsuarios(): Observable<any> {
    // return this._http.get<Formulario>(this.apiUrl + 'users')
    return this._http.get<any>(this.apiUrl + 'funcionarios')
    .pipe(catchError(this.handleError));
  }

  // Gerar Relatorio
  gerarRelatorio(cpf: any): Observable<any> {
    return this._http.get<any>(this.apiUrl + 'ambulantes/pdf/' + cpf)
    .pipe(catchError(this.handleError));
  }

  // Tratar erros
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

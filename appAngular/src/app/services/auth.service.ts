import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Token } from '../models/token';
import { UsuarioService } from './usuario.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  // private apiUrl = 'https://webapibhresolve20181031110915.azurewebsites.net/api/';
  // private apiUrl = 'http://5b644de0923c0500144a27d8.mockapi.io/users';
  // private apiUrl = 'http://5bd75c464fff0700136001be.mockapi.io/users';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private tokenService: TokenService
  ) { }

  autenticar(cpf: string, senha: string): Observable<Token> {
    const body = {
      cpf: cpf,
      senha: senha
    };
    // return this.http.post<Token>(`${this.apiUrl}/auth`, body)
    return this.http.post<Token>(`${this.apiUrl}`, body)
      .pipe(catchError(this.handleError));
  }

  getAutenticar (cpf: any, senha: string): Observable<Token> {
    const params = new HttpParams().set('cpf', cpf).append('senha', senha);
    return this.http.get<Token>(this.apiUrl + 'funcionarios/login', { params: params })
    .pipe(catchError(this.handleError));
  }

  validarPermissao (cpf: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'funcionarios/' + cpf)
      .pipe(catchError(this.handleError));
  }

  sair(): Observable<any> {
    // Em construção
    this.tokenService.excluirToken();
    this.usuarioService.excluirCodigoUsuario();
    return;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent || error.error instanceof ProgressEvent) {
      return throwError(`Erro ao realizar o acesso. (${error.status})`);
    } else {
      return throwError(error.error.Message);
    }
  }
}

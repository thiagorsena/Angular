import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly NOME_COD_USUARIO = 'u_cod';

  constructor() { }

  resgatarCodigoUsuario(): number {
    // tslint:disable-next-line:radix
    const codigoUsuario = Number.parseInt(localStorage.getItem(this.NOME_COD_USUARIO));
    return codigoUsuario;
  }

  salvarCodigoUsuario(codigoUsuario: any): void {
    localStorage.setItem(this.NOME_COD_USUARIO, codigoUsuario);
  }

  excluirCodigoUsuario(): void {
    localStorage.removeItem(this.NOME_COD_USUARIO);
  }
}

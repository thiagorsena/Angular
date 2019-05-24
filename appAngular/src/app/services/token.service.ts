import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly NOME_TOKEN = 'man_token';

  constructor(
    private cookieService: CookieService,
  ) { }

  buscarToken(): string {
    return this.cookieService.get(this.NOME_TOKEN);
  }

  checarToken(): boolean {
    return this.cookieService.check(this.NOME_TOKEN);
  }

  gravarToken(token: Token): void {
    this.cookieService.set(this.NOME_TOKEN, token.AuthToken, new Date(token.ExpiresOn));
  }

  excluirToken() {
    return this.cookieService.delete(this.NOME_TOKEN);
  }
}

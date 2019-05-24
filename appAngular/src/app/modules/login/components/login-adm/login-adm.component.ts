import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { routerTransition } from '../router.animations';

import { AuthService } from '../../../../services/auth.service';
import { Token } from '../../../../models/token';
import { TokenService } from '../../../../services/token.service';
import { LoaderService } from '../../../../services/loader.service';
import { RequestsFeedbackService } from '../../../../services/requests-feedback.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent implements OnInit {
  form: FormGroup;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private loader: LoaderService,
    private reqFeedback: RequestsFeedbackService,
    private usuarioService: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
}

  acessar(): void {
    this.loader.show();
    const { cpf, senha } = this.form.value;

    this.authService.getAutenticar(cpf, senha)
      .subscribe(
        (token: Token) => {
          localStorage.clear();
          this.tokenService.gravarToken(token);
          this.usuarioService.salvarCodigoUsuario(token.OwnerCod);
          this.router.navigate(['/app/cadastro/formulario']);
          this.loader.hide();
          localStorage.setItem('cpfLogado', cpf);
          this.validarPermissao();
        },
        error => {
          this.reqFeedback.addFeedback(error, null, false);
          this.loader.hide();
        }
      );
  }

  validarPermissao() {
    const { cpf } = this.form.value;
    this.authService.validarPermissao(cpf)
    .subscribe(res => {
      localStorage.setItem('permissao', res.permissao);
    });
  }

}

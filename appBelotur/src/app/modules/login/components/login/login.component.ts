import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { routerTransition } from '../router.animations';

import { MatDialog } from '@angular/material';

import { AuthService } from '../../../../services/auth.service';
import { Token } from '../../../../models/token';
import { TokenService } from '../../../../services/token.service';
import { LoaderService } from '../../../../services/loader.service';
import { RequestsFeedbackService } from '../../../../services/requests-feedback.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { FormularioComponent } from '../../../cadastro/component/formulario/formulario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private loader: LoaderService,
    private reqFeedback: RequestsFeedbackService,
    private usuarioService: UsuarioService,
    private dialog: MatDialog,
  ) {
    this.form = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    this.formLogin = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  ngOnInit() { }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
}

  acessar(): void {
    this.loader.show();
    const { usuario, senha } = this.form.value;

    this.authService.autenticar(usuario, senha)
      .subscribe(
        (token: Token) => {
          this.tokenService.gravarToken(token);
          this.usuarioService.salvarCodigoUsuario(token.OwnerCod);
          this.router.navigate(['/app']);
          this.loader.hide();
        },
        error => {
          this.reqFeedback.addFeedback(error, null, false);
          this.loader.hide();
        }
      );
  }

  abrirArmazenarContato(model): void {
    this.dialog.open(FormularioComponent, {
      data: {
        dados: model
      },
      // minWidth: '100%',
      // maxHeight: '100%',
      minWidth: '1024px',
      maxHeight: '720px',
    });
  }

}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  title = 'BELOTUR';
  public cpfLogado = localStorage.getItem('cpfLogado');
  public tipoPermissao: boolean;
  public itensMenu: MenuItem[];

  // menuItems: MenuItem[] = [
  //   { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/formulario', isActive: 'is-active-cadastros' },
  //   { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
  //   { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
  //   { name: 'Gerencial', icon: 'supervised_user_circle', route: '/app/gerencial', isActive: 'is-active-gerencial' },
  //   { name: 'Relatorio', icon: 'cloud_download', route: '/app/cadastro/relatorio', isActive: 'is-active-relatorio' },
  // ];

  // cadastroMenuItems: MenuItem[] = [
  //   { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/formulario', isActive: 'is-active-cadastros' },
  //   { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
  //   { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
  //   { name: 'Gerencial', icon: 'supervised_user_circle', route: '/app/gerencial', isActive: 'is-active-gerencial' },
  // ];

  constructor(
    public router: Router,
    private authService: AuthService,
    private formularioService: FormularioService,
  ) { }

  ngOnInit() {
    this.tipoMenu();
    console.log(localStorage);
  }

  sair(): void {
    this.authService.sair();
    this.router.navigate(['/login']);
    localStorage.removeItem('permissao');
    localStorage.clear();
  }

  tipoMenu() {
    if (localStorage.getItem('cpfLogado') === '12345678911') {
      this.itensMenu = [
        { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/formulario', isActive: 'is-active-cadastros' },
        { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
        { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
        { name: 'Gerencial', icon: 'supervised_user_circle', route: '/app/gerencial', isActive: 'is-active-gerencial' },
        { name: 'Download', icon: 'cloud_download', route: '/app/cadastro/relatorio', isActive: 'is-active-download' },
      ];
    } else {
      this.itensMenu = [
        { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/formulario', isActive: 'is-active-cadastros' },
        { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
        // { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
        // { name: 'Gerencial', icon: 'supervised_user_circle', route: '/app/gerencial', isActive: 'is-active-gerencial' },
      ];
    }
  }

}

interface MenuItem {
  name: string;
  icon: string;
  route: string;
  isActive: string;
  color?: string;
  funcao?: any;
}

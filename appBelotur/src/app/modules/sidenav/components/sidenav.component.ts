import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  title = 'Belotur';

  menuItems: MenuItem[] = [
    { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
    { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/novo-cadastro', isActive: 'is-active-cadastros' },
    { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
    { name: 'Gerencial', icon: 'supervised_user_circle', route: '/app/gerencial', isActive: 'is-active-gerencial' },
  ];

  admMenuItems: MenuItem[] = [
    { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
    { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/novo-cadastro', isActive: 'is-active-cadastros' },
    { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
    { name: 'Gerencial', icon: 'supervised_user_circle', route: '/app/gerencial', isActive: 'is-active-gerencial' },
  ];

  constructor(
    public router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  sair(): void {
    this.authService.sair();
    this.router.navigate(['/login']);
  }

}

interface MenuItem {
  name: string;
  icon: string;
  route: string;
  isActive: string;
  color?: string;
}

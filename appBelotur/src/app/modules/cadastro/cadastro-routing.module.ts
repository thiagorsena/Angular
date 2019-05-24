import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './component/cadastro.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { CadastroLayoutComponent } from './component/cadastro-layout/cadastro-layout.component';
import { RelacaoCadastrosComponent } from './component/relacao-cadastros/relacao-cadastros.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NovoCadastroComponent } from './component/relacao-cadastros/novo-cadastro/novo-cadastro.component';
import { EditarCadastroComponent } from './component/relacao-cadastros/editar-cadastro/editar-cadastro.component';

const routes: Routes = [
  {
      path: '', component: CadastroLayoutComponent, children: [
        { path: 'cadastro', component: CadastroComponent },
        { path: 'formulario', component: FormularioComponent },
        { path: 'novo-cadastro', component: NovoCadastroComponent },
        { path: 'relacao-cadastros', component: RelacaoCadastrosComponent },
        { path: 'editar-cadastros', component: EditarCadastroComponent},
        { path: 'dashboard', component: DashboardComponent }
          // { path: 'dashboard', loadChildren: '../financeiro/dashboard/dashboard.module#DashboardModule' }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CadastroRoutingModule { }

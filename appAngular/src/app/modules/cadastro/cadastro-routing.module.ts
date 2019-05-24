import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './component/cadastro.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { CadastroLayoutComponent } from './component/cadastro-layout/cadastro-layout.component';
import { RelacaoCadastrosComponent } from './component/relacao-cadastros/relacao-cadastros.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NovoCadastroComponent } from './component/relacao-cadastros/novo-cadastro/novo-cadastro.component';
import { EditarCadastroComponent } from './component/relacao-cadastros/editar-cadastro/editar-cadastro.component';
import { WebCamComponent } from './component/web-cam/web-cam.component';
import { CrachaComponent } from './component/cracha/cracha.component';
import { RelatorioComponent } from './component/relatorio/relatorio.component';

const routes: Routes = [
  {
      path: '', component: CadastroLayoutComponent, children: [
        { path: 'cadastro', component: CadastroComponent },
        { path: 'formulario', component: FormularioComponent },
        { path: 'novo-cadastro', component: NovoCadastroComponent },
        { path: 'relacao-cadastros', component: RelacaoCadastrosComponent },
        { path: 'editar-cadastros', component: EditarCadastroComponent},
        { path: 'dashboard', component: DashboardComponent },
        { path: 'web-cam', component: WebCamComponent },
        { path: 'cracha', component: CrachaComponent },
        { path: 'relatorio', component: RelatorioComponent }
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

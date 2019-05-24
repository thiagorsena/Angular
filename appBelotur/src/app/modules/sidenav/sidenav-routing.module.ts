import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './components/sidenav.component';

const routes: Routes = [
    {
        path: '', component: SidenavComponent, children: [
            { path: 'cadastro', loadChildren: '../cadastro/cadastro.module#CadastroModule' },
            { path: 'gerencial', loadChildren: '../gerencial/gerencial.module#GerencialModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SidenavRoutingModule { }

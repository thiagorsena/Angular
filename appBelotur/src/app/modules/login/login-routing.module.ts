import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdmComponent } from './components/login-adm/login-adm.component';

const routes: Routes = [
    {
        path: '', component: LoginLayoutComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'auth', component: LoginAdmComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }

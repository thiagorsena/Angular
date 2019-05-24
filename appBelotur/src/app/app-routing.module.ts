import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { FormularioComponent } from './modules/cadastro/component/formulario/formulario.component';

const routes: Routes = [
// { path: 'app', loadChildren: './modules/sidenav/sidenav.module#SidenavModule', canActivate: [AuthGuard] },
{ path: 'app', loadChildren: './modules/sidenav/sidenav.module#SidenavModule' },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'formulario', component: FormularioComponent },

{ path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
{ path: 'signup', loadChildren: './modules/signup/signup.module#SignupModule' },
{ path: 'error', loadChildren: './modules/server-error/server-error.module#ServerErrorModule' },
{ path: 'access-denied', loadChildren: './modules/access-denied/access-denied.module#AccessDeniedModule' },
{ path: 'not-found', loadChildren: './modules/not-found/not-found.module#NotFoundModule' },
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


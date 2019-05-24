import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerencialComponent } from './component/gerencial/gerencial.component';
import { GerencialLayoutComponent } from './component/gerencial-layout/gerencial-layout.component';

const routes: Routes = [
  {
      path: '', component: GerencialLayoutComponent, children: [
          { path: 'gerencial', component: GerencialComponent },
          // { path: 'gerencial-layout', component: GerencialLayoutComponent },
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class GerencialRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { GerencialRoutingModule } from './gerencial-routing.module';
import { GerencialComponent } from './component/gerencial/gerencial.component';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { GerencialLayoutComponent } from './component/gerencial-layout/gerencial-layout.component';



@NgModule({
  imports: [
    CommonModule,
    GerencialRoutingModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GerencialComponent,
    GerencialLayoutComponent
  ],
  bootstrap: [GerencialComponent],
})
export class GerencialModule { }

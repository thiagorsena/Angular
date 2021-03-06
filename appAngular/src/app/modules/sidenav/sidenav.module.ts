import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SidenavComponent } from './components/sidenav.component';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  declarations: [
    SidenavComponent,
    HeaderComponent,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }

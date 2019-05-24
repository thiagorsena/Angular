import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgxMaskModule } from 'ngx-mask';

import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { LoginAdmComponent } from './components/login-adm/login-adm.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    LoginLayoutComponent,
    LoginComponent,
    LoginAdmComponent,
  ],
  providers: [
    CookieService
  ]
})
export class LoginModule { }

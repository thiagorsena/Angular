import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialComponentsModule } from './shared/material-components/material-components.module';
import { UsuarioService } from './services/usuario.service';
import { CadastroModule } from './modules/cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialComponentsModule,
    CadastroModule,
    NgbModule,
    HighchartsChartModule
  ],
  providers: [
    CookieService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

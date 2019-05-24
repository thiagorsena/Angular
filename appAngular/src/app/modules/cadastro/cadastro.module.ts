import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ChartsModule } from 'ng2-charts';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxMaskModule } from 'ngx-mask';
import { FileUploadModule } from 'ng2-file-upload';
import { ChartModule } from 'angular-highcharts';
import {WebcamModule} from 'ngx-webcam';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './component/cadastro.component';
import { CadastroLayoutComponent } from './component/cadastro-layout/cadastro-layout.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { FormularioComponent } from './component/formulario/formulario.component';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RelacaoCadastrosComponent } from './component/relacao-cadastros/relacao-cadastros.component';
import { EditarCadastroComponent } from './component/relacao-cadastros/editar-cadastro/editar-cadastro.component';
import { DialogOrientacoesComponent } from './component/formulario/dialog-orientacoes/dialog-orientacoes.component';
import { DeletarCadastroComponent } from './component/relacao-cadastros/deletar-cadastro/deletar-cadastro.component';
import { NovoCadastroComponent } from './component/relacao-cadastros/novo-cadastro/novo-cadastro.component';
import { WebCamComponent } from './component/web-cam/web-cam.component';
import { CrachaComponent } from './component/cracha/cracha.component';
import { RelatorioComponent } from './component/relatorio/relatorio.component';
import { ValidarFotoComponent } from './component/web-cam/validar-foto/validar-foto.component';

@NgModule({
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatChipsModule,
    QRCodeModule,
    NgxMaskModule.forRoot(),
    FileUploadModule,
    ChartModule,
    WebcamModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [
    CadastroComponent,
    CadastroLayoutComponent,
    FormularioComponent,
    DashboardComponent,
    RelacaoCadastrosComponent,
    EditarCadastroComponent,
    DialogOrientacoesComponent,
    DeletarCadastroComponent,
    NovoCadastroComponent,
    WebCamComponent,
    CrachaComponent,
    RelatorioComponent,
    ValidarFotoComponent
  ],
  providers: [
    RelacaoCadastrosComponent, // seu provider aqui
    WebCamComponent
  ],
  bootstrap: [FormularioComponent],
  entryComponents: [
    DialogOrientacoesComponent,
    DeletarCadastroComponent,
    RelacaoCadastrosComponent,
    EditarCadastroComponent,
    WebCamComponent,
    ValidarFotoComponent
  ]
})
export class CadastroModule { }

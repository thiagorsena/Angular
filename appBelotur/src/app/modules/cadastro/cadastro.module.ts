import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ChartsModule } from 'ng2-charts';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxMaskModule } from 'ngx-mask';
import { FileUploadModule } from 'ng2-file-upload';
import { ChartModule } from 'angular-highcharts';

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
    ChartModule
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
    NovoCadastroComponent
  ],
  bootstrap: [FormularioComponent],
  entryComponents: [
    DialogOrientacoesComponent,
    DeletarCadastroComponent
  ]
})
export class CadastroModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';
import { ConversorRoutingComponent } from './conversor-routing.component';
import { ConversorRoutingModule } from './component.routing.module';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  imports: [CommonModule, FormsModule, ConversorRoutingModule],
  exports: [ConversorComponent]
})
export class ConversorModule {}

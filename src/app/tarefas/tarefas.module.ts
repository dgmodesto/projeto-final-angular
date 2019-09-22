import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { TarefasRoutingComponent } from './tarefas-routing.component';
import { TarefasRoutingModule } from './tarefas-routing.module';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, TarefasRoutingModule],
  providers: [TarefaService]
})
export class TarefasModule {}

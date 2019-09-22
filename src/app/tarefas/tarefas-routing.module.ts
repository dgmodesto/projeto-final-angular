import { Routes, RouterModule } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { TarefasRoutingComponent } from './tarefas-routing.component';
import { NgModule } from '@angular/core';

export const TarefasRoutes: Routes = [
  {
    path: 'tarefas',
    component: TarefasRoutingComponent,
    children: [
      {
        path: '',
        component: ListarTarefaComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarTarefasComponent
      },
      {
        path: 'editar/:id',
        component: EditarTarefaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TarefasRoutes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule {}

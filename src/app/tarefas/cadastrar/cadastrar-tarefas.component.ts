import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { NgForm } from '@angular/forms';
import { TarefaService } from '../shared/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.scss']
})
export class CadastrarTarefasComponent implements OnInit {
  tarefa: Tarefa;
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;

  constructor(private tarefaService: TarefaService, private router: Router) {}

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefasComponent } from './cadastrar-tarefas.component';
import { TarefaService } from '../shared/tarefa.service';

describe('CadastrarTarefasComponent', () => {
  let component: CadastrarTarefasComponent;
  let fixture: ComponentFixture<CadastrarTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarTarefasComponent],
      providers: [TarefaService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create',  () => {
  //   expect(component).toBeTruthy();
  // });
});

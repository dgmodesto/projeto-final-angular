import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JogoDaVelhaComponent } from "./jogo-da-velha.component";
import { JogoDaVelhaService } from "./shared/jogo-da-velha.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("JogoDaVelhaComponent", () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [JogoDaVelhaService],
      declarations: [JogoDaVelhaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

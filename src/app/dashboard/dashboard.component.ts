import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DadosService]
})
export class DashboardComponent implements OnInit {
  dados: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit() {
    this.dadosService.obterDados().subscribe(dados => {
      this.dados = dados;
      this.init();
    });
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * o quer permite a integração da API com o Angular.
   * @return void
   */
  init(): void {
    debugger;
    if (typeof google !== 'undefined') {
      google.charts.load('current', { packages: ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  /**
   * Método chamado assim que a API de gráficos é incializada.
   * Responsável por chamar os métodos geradors dos gráficosbundleRenderer.renderToStream
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();
  }

  /**
   * Retorna as opções do gráfico, que incluem o título
   * e tamnho do gráfico
   *
   * @return any
   */
  ObterOpcoes(): any {
    return {
      title: 'Quantidade de cadastros primeiro semestre',
      width: 400,
      height: 300
    };
  }

  /**
   * Cria e retorna o objeto DataTable da API  de gráficos,
   * responsável por definir os dados do gráfico
   *
   * @return any
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mes');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Exibe o gráfico Pie Chart
   * @return void
   */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }

  /**
   * Exibe o gráfico Pie Chart
   * @return void
   */
  exibir3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);

    const opcoes = this.ObterOpcoes();
    opcoes.is3D = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart
   * @return void
   */
  exibirBarChart() {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    const opcoes = this.ObterOpcoes();
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Line Chart
   * @return void
   */
  exibirLineChart() {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }

  /**
   * Exibe o gráfico Donut Chart
   * @return void
   */
  exibirDonutChart() {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);

    const opcoes = this.ObterOpcoes();
    opcoes.pieHole = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Column Chart
   * @return void
   */
  exibirColumnChart() {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }
}

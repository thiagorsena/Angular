import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  titulo = 'Dashboard';

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartTitle: string[] = ['Realizados', 'Aprovados'];
  public lineChartType = 'line';
  public pieChartType = 'pie';

  // Highcharts
  chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Top 5 Atendentes'
    },
    xAxis: {
      categories: ['Atendente 1', 'Atendente 2', 'Atendente 3', 'Atendente 4', 'Atendente 5'],
      title: {
        text: null
    }
},
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Novo',
        data: [3, 6, 1, 2, 6]
      },
      {
        name: 'Aprovado',
        data: [5, 6, 4, 2, 1]
      },
      {
        name: 'Pendente',
        data: [6, 7, 2, 3, 6]
      }
    ]
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Origem do Atendiemnto'
    },
    series: [
      {
        name: 'Atendente',
        data: [61.41, 11.84, 10.85, 4.67, 4.18, 1.64, 1.6, 1.2, 2.61]
      },
    ]
  });

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Atendimentos Por Atendente'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Atendente 1',
        data: [1, 2, 3, 4, 5]
      },
      {
        name: 'Atendente 2',
        data: [4, 1, 6, 2, 7]
      },
      {
        name: 'Atendente 3',
        data: [6, 7, 2, 3, 6]
      }
    ]
  });

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
  }

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}

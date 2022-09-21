import { Component, OnInit } from '@angular/core';
import {ChartDataSets,ChartOptions} from 'chart.js';
import {Color,Label,MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 56, 54 , 75], label: 'StartUp Mission Webinar' },
    { data: [28, 48, 40, 19, 86, 77, 70 , 30,60], label: 'Idea Development Webinar' }
  ];

  //Labels shown on the x-axis
  lineChartLabels:Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false
  };

  // Define colors of chart segments
  lineChartColors:Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  // chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  //

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];
  
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Customers' },
    { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Premium Members' }
  ];

  //

  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets+ ' %';
        }
      }
    },
  };

  pieChartLabels: Label[] = ['Profit', 'Loss', 'Average Gain'];

  pieChartData: number[] = [78.09, 10.95, 30.93];

  

  pieChartLegend = true;

  pieChartPlugins = [];

  pieChartColors = [
    {
      backgroundColor: ['crimson', 'rgba(0,25,100,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  //

  doughnutChartLabels: Label[] = ['2020', '2021', '2022'];
  doughnutChartData: MultiDataSet = [
    [53, 30, 17]
  ];
  
  //

  bubbleChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 80,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 250000,
          }
        }
      ]
    }
  };
  
  bubbleChartLegend = true;

  bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 45, y: 150000, r: 22.22 },
        { x: 42, y: 110000, r: 33.00 },
        { x: 60, y: 80637, r: 15.22 },
        { x: 75, y: 195055, r: 21.50 },
        { x: 30, y: 160446, r: 35.67 },
      ],
      label: 'Units sold, Sales and Profitability'
    },
  ];
}


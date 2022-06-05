import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartDispo;
  public chartHours;

    ngOnInit(){
      this.chartColor = "#FFFFFF";
      this.canvas = document.getElementById("chartDispo");
      this.ctx = this.canvas.getContext("2d");
      this.chartDispo = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#4acccd',
              '#EB5C57',
              
              
            ],
            borderWidth: 0,
            data: [5, 95]
          }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });

      var speedCanvas = document.getElementById("speedChart");

      var dataFirst = {
        data: [3000, 4000, 4500, 5000, 6000, 8000],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var dataSecond = {
        data: [8000, 10000, 15000, 25000, 40000, 55000],
        fill: false,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };

      var speedData = {
        labels: ["sans classment", "1étoile", "2étoile", "3étoile", "4étoile", "5étoile"],
        datasets: [dataFirst, dataSecond]
      };
      var speedData = {
        labels: ["sans classment", "1étoile", "2étoile", "3étoile", "4étoile", "5étoile"],
        datasets: [dataFirst, dataSecond]
      };

      var speedData2 = {
        labels: ["sans classment", "1étoile", "2étoile", "3étoile", "4étoile", "5étoile"],
        datasets: [dataFirst]
      };

      var speedData1 = {
        labels: ["sans classment", "1étoile", "2étoile", "3étoile", "4étoile", "5étoile"],
        datasets: [dataSecond]
      };
      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });

      var speedCanvas2 = document.getElementById("speedChart2");
      var lineChart = new Chart(speedCanvas2, {
        type: 'line',
        hover: false,
        data: speedData2,
        options: chartOptions
      });

      var speedCanvas1 = document.getElementById("speedChart1");
      var lineChart = new Chart(speedCanvas1, {
        type: 'line',
        hover: false,
        data: speedData1,
        options: chartOptions
      });
    }
    
}

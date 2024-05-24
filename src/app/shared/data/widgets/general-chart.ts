import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexLegend,
    ApexResponsive,
    ApexStroke,
    ApexXAxis,
    ApexYAxis,
    ApexFill,
    ApexDataLabels,
    ApexAxisChartSeries,
    ApexMarkers,
    ApexTheme,
    ApexTitleSubtitle,
    ApexAnnotations,
    ApexGrid
} from "ng-apexcharts";


export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    stroke?: ApexStroke;
    tooltip?: string[] | boolean;
    dataLabels?: ApexDataLabels;
    yaxis?: ApexYAxis;
    legend?: ApexLegend;
    labels?: string[];
    shared?: boolean;
    plotOptions?: ApexPlotOptions;
    fill?: ApexFill;
    responsive?: ApexResponsive[];
    pieseries?: ApexNonAxisChartSeries;
    title?: ApexTitleSubtitle;
    theme?: ApexTheme;
    colors?: string[];
    markers?: ApexMarkers;
    annotations?: ApexAnnotations;
    grid?: ApexGrid;
    formatter?: Function;
}


export const GeneralsalesChart:ChartOptions |any ={
    series: [{
        name: 'Revenue', 
        data: [1000, 3900, 2500, 7400, 5800, 8000, 4200]
      }, {
        name: 'Orders',
        data: [3800, 4300, 3400, 3300, 3000, 1800, 5900]
      }],
      colors: ['#006666','#FFAE1A'],
      chart: {
        height: 270,
        type: 'area',
        toolbar: {
          tools: {
            zoom: false,
            zoomin: false, 
            zoomout: false, 
            reset: false,
            pan: false,
            download: false,  
          },
        },
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 2,
          left: 1,
          blur: 2,
          color: ['rgba($primary-color,0.6)', 'rgba($warning-color,0.6)'],
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false 
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        gradient:{
            opacityFrom: 0.5,
            opacityTo: 0,
            shadeIntensity: 0.2,
        },
      },
      grid: {
        strokeDashArray: 5,
      },
      yaxis:{
        labels: {
            style: {
                colors:['var(--body-font-color)'],
            }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        },
        dataLabels:{
            value: {
                show: true,
                formatter: function (val:string) {
                  return val + 'k';
                }
            }
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
          labels: { 
            style: {
              colors: ['var(--body-font-color)',['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'],['var(--body-font-color)'] ]  ,
            }
          },
          axisTicks: {
            show: false
          },
          axisBorder: { 
            show: false
          },
      },
      tooltip: {
        x:{
          format: 'dd/MM/YYYY',
          show: 'true',
        },
        custom: function ({
            series,
            seriesIndex,
            dataPointIndex,
          }:any) {
            return '<div class="px-4 py-1 position-relative">' + '<span class="fs-2">' + 'K' + series[seriesIndex][dataPointIndex] + '</span>' + '<br>' + '<span class="align-middle text-content">' + 'Orders' + '</span>' + '</div>';
          },
      },
}


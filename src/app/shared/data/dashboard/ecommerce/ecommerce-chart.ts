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


export const ProjectStatistics:ChartOptions |any={
    series: [{
        name: 'Web App Design',
        data: [85, 85, 152, 95, 50, 95 , 130 ]
      }, {
        name: 'Website Design',
        data: [190, 135, 220, 160, 65, 160, 185]
      }, { 
        name: 'App Design',
        data: [245, 165, 260, 230, 110, 170 ,245]
      }],
        colors:['var(--theme-deafult)' ,'#80B3B3' ,'#CCE0E0'],
        chart: { 
        type: 'bar',
        height: 412, 
        stacked: true, 
      
        toolbar: {
          show: false,
          tools: {
            download: false,
          }
        },
        zoom: {
          enabled: true 
        }
      },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetY: 2,
            }
          } 
        }], 
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 6,
            columnWidth: '20%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat' ,'Sun'
          ],
          axisTicks: {
            show: false
          },
          axisBorder: {
              show: false
          },
        },
        legend: {
          position: 'bottom',
          offsetY: 5
        },
        fill: {
          opacity: 1
        }
}

export const commenwidget1:ChartOptions| any = {
  series: [75],
    chart: {
      height: 90,
      type: 'radialBar',
      offsetX: -5,
      offsetY: -15,
    },
  plotOptions: {
      radialBar: {
          hollow: {
              size: '35%',
          },
          track: {
              background: 'var(--theme-deafult)',
              opacity: 0.2,
          },
          dataLabels: {
              value: {
                  color: "var(--tag-text-color--edit)",
                  fontSize: "10px",
                  show: true,
                  offsetY: -12,
              }
          }
      },
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
      lineCap: "round",
  },
}
export const commenwidget2:ChartOptions| any = {
  series: [50],
     chart: {
      height: 90,
      type: 'radialBar',
      offsetX: -5,
      offsetY: -15,
    },
  plotOptions: {
      radialBar: {
          hollow: {
              size: '35%',
          },
          track: {
              background: 'var(--theme-deafult)',
              opacity: 0.2,
          },
          dataLabels: {
              value: {
                  color: "var(--tag-text-color--edit)",
                  fontSize: "10px",
                  show: true,
                  offsetY: -12,
              }
          }
      },
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
      lineCap: "round",
  },
}
export const commenwidget3:ChartOptions| any = {
  series: [25],
     chart: {
      height: 90,
      type: 'radialBar',
      offsetX: -5,
      offsetY: -15,
    },
  plotOptions: {
      radialBar: {
          hollow: {
              size: '35%',
          },
          track: {
              background: 'var(--theme-deafult)',
              opacity: 0.2,
          },
          dataLabels: {
              value: {
                  color: "var(--tag-text-color--edit)",
                  fontSize: "10px",
                  show: true,
                  offsetY: -12,
              }
          }
      },
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
      lineCap: "round",
  },
}
export const commenwidget4:ChartOptions| any = {
  series: [86],
  chart: {
   height: 90,
   type: 'radialBar',
   offsetX: -5,
   offsetY: -15,
 },
plotOptions: {
   radialBar: {
       hollow: {
           size: '35%',
       },
       track: {
           background: 'var(--theme-deafult)',
           opacity: 0.2,
       },
       dataLabels: {
           value: {
               color: "var(--tag-text-color--edit)",
               fontSize: "10px",
               show: true,
               offsetY: -12,
           }
       }
   },
},
colors: ["var(--theme-deafult)"],
stroke: {
   lineCap: "round",
},

}
export const commenwidget5:ChartOptions| any = {
  series: [74],
     chart: {
      height: 90,
      type: 'radialBar',
      offsetX: -5,
      offsetY: -15,
    },
  plotOptions: {
      radialBar: {
          hollow: {
              size: '35%',
          },
          track: {
              background: 'var(--theme-deafult)',
              opacity: 0.2,
          },
          dataLabels: {
              value: {
                  color: "var(--tag-text-color--edit)",
                  fontSize: "10px",
                  show: true,
                  offsetY: -12,
              }
          }
      },
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
      lineCap: "round",
  },
}

export const projectTable = [
 {
    id:1,
    option:commenwidget1,
    name:'Pet App Design',
    clientName:'Darrell Steward',
    clientId:'darrells@example.com',
    time:'8 Days Left',
    endDate:'15 Nov, 2023',
    assignedto:'Team Roha',
    member:'12 Member',
    status:'Active',
    class:'primary'
 },
 {
    id:2,
    option:commenwidget2,
    name:'Chain Desktop App',
    clientName:'Eleanor Pena',
    clientId:'pena12@example.com',
    time:'13 Days Left',
    endDate:'20 Nov, 2023',
    assignedto:'Team Suresh',
    member:'10 Member',
    status:'On Hold',
    class:'warning'
 },
 {
  id:3,
  option:commenwidget3,
  name:'Business Web Design',
  clientName:'Robert Fox',
  clientId:'foxxxx8s@example.com',
  time:'15 Days Left',
  endDate:'22 Nov, 2023',
  assignedto:'Team Liza',
  member:'7 Member',
  status:'Pending',
  class:'secondary'
},
{
  id:4,
  option:commenwidget4,
  name:'NFT App Design',
  clientName:'Arlene McCoy',
  clientId:'arlene78@example.com',
  time:'21 Days Left',
  endDate:'28 Nov, 2023',
  assignedto:'Team Sulekha',
  member:'9 Member',
  status:'Active',
  class:'primary'
},
{
  id:5,
  option:commenwidget5,
  name:'Digital Avtar Web Design',
  clientName:'Courtney Henry',
  clientId:'henry45@example.com',
  time:'25 Days Left',
  endDate:'2 Dec, 2023',
  assignedto:'Team Shreena',
  member:'12 Member',
  status:'Active',
  class:'primary'
 }
]

 
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
Chart.Tooltip.positioners.cursor = function(chartElements, coordinates) {
  return coordinates;
};

// Daily chart
var ctx = document.getElementById("casesChart");
var daily_cases = JSON.parse(document.getElementById('daily-cases').textContent);
console.log(daily_cases)
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: daily_cases["labels"],
    datasets: [{
      label: "Confirmed",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: daily_cases["data"]["confirmed"]
    }, {
      label: "Dead",
      lineTension: 0.3,
      backgroundColor: "rgba(231, 74, 59, 0.05)",
      borderColor: "rgba(231, 74, 59, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(231, 74, 59, 1)",
      pointBorderColor: "rgba(231, 74, 59, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(231, 74, 59, 1)",
      pointHoverBorderColor: "rgba(231, 74, 59, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: daily_cases["data"]["dead"]
    }, {
      label: "Recovered",
      lineTension: 0.3,
      backgroundColor: "rgba(28, 200, 138, 0.05)",
      borderColor: "rgba(28, 200, 138, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(28, 200, 138, 1)",
      pointBorderColor: "rgba(28, 200, 138, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(28, 200, 138, 1)",
      pointHoverBorderColor: "rgba(28, 200, 138, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: daily_cases["data"]["recovered"]
    }
  ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          // callback: function(value, index, values) {
          //   return number_format(value);
          // }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      position: 'cursor',
      intersect: true,
      mode: 'label',
      caretPadding: 10,
    }
  }
});

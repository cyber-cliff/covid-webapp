// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Helper fcns
function dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

function poolColors(a) {
    var pool = [];
    var i = 0
    while (i != a) {
        var color = dynamicColors()
        if (pool.includes(color)) {
            continue
        } else {
            pool.push(color);
            i++;
        }
    }
    console.log(pool)
    return pool;
}

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var regional_cases = JSON.parse(document.getElementById('regional-cases').textContent);
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: regional_cases["labels"],
        datasets: [{
            data: regional_cases["data"],
            backgroundColor: poolColors(regional_cases["labels"].length),
            // hoverBackgroundColor: poolColors(regional_cases["labels"].length),
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: true,
            caretPadding: 10,
        },
        legend: {
            display: true,
            position: 'bottom'
        },
        cutoutPercentage: 80,
    },
});

// Age chart
var ctx = document.getElementById("ageChart");
var myBarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90"],
    datasets: [{
      label: "Cases",
      backgroundColor: "#385170",
      hoverBackgroundColor: "#142d4c",
      borderColor: "#4e73df",
      data: [1, 18, 25, 25, 27, 14, 8, 2],
    }],
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
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5,
          padding: 10,
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
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  }
});

// Sex Pie Chart
var ctx = document.getElementById("sexChart");
var regional_cases = JSON.parse(document.getElementById('regional-cases').textContent);
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            data: [67,33],
            backgroundColor: ["#FF2531", "#02AFAE"],
            // hoverBackgroundColor: [],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: true,
            caretPadding: 10,
        },
        legend: {
            display: true,
            position: 'bottom'
        },
        cutoutPercentage: 0,
    },
});
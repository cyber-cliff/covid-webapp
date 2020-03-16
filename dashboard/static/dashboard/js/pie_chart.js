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
              backgroundColor: poolColors(regional_cases["labels"].length),
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
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

// scripts.js

// Function to create Scatter Plot chart
function createScatterPlotChart() {
    var data = [
        {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: 'markers',
            type: 'scatter'
        }
    ];

    var layout = {
        title: 'Scatter Plot Chart'
    };

    Plotly.newPlot('scatter-plot-chart', data, layout);
}

// Function to create Line Chart
function createLineChart() {
    var data = [
        {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'line'
        }
    ];

    var layout = {
        title: 'Line Chart'
    };

    Plotly.newPlot('line-chart-chart', data, layout);
}
// Function to create Bubble Chart
function createBubbleChart() {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
            size: [40, 60, 80, 100]
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Bubble Chart'
    };

    Plotly.newPlot('bubble-chart-chart', data, layout);
}
// Function to create Pie Chart
function createPieChart() {
    var data = [{
        values: [19, 26, 55],
        labels: ['A', 'B', 'C'],
        type: 'pie'
    }];

    var layout = {
        title: 'Pie Chart'
    };

    Plotly.newPlot('pie-chart-chart', data, layout);
}
// Function to create Bar Chart
function createBarChart() {
    var data = [{
        x: ['A', 'B', 'C', 'D'],
        y: [12, 19, 3, 5],
        type: 'bar'
    }];

    var layout = {
        title: 'Bar Chart'
    };

    Plotly.newPlot('bar-chart-chart', data, layout);
}
// Function to create Donut Chart
function createDonutChart() {
    var data = [{
        values: [19, 26, 55],
        labels: ['A', 'B', 'C'],
        hole: 0.4,
        type: 'pie'
    }];

    var layout = {
        title: 'Donut Chart'
    };

    Plotly.newPlot('donut-chart-chart', data, layout);
}

// Call function to create Donut Chart
createDonutChart();

// Call function to create Bar Chart
createBarChart();

// Call function to create Pie Chart
createPieChart();

// Call function to create Bubble Chart
createBubbleChart();

// Call functions to create charts
createScatterPlotChart();
createLineChart();
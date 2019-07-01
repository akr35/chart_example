var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "data1",
        data: [
          {
            x: -10,
            y: 0
          },
          {
            x: 0,
            y: 10
          },
          {
            x: 10,
            y: 5
          }
        ],
        pointRadius: 10,
        backgroundColor: "red"
      },
      {
        label: "data2",
        data: [
          {
            x: 30,
            y: 10
          },
          {
            x: 15,
            y: -5
          },
          {
            x: -10,
            y: -20
          }
        ],
        pointRadius: 10,
        backgroundColor: "blue"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: false
          },
          scaleLabel: {
            display: true,
            labelString: "[m]"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false
          },
          scaleLabel: {
            display: true,
            labelString: "[m]"
          }
        }
      ]
    }
  }
});

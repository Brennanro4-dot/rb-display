export const newOvertimeData = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"],
    datasets: [
      {
        data: [8, 10, 20, 40, 79, 82, 27, 14],
        borderColor: "#36495d",
        borderWidth: 3
      }
    ]
  },
  options: {
    legend: {
           display: false
        },
responsive:true,
maintainAspectRatio: false,
    lineTension: 1,
    scales: {
          yAxes: [{
            gridLines: {
               display: false
           },
              ticks: {
                  display: false
              }
          }],
          xAxes: [{
            gridLines: {
              display: false
           },
              ticks: {
                  display: false
              }
          }]
      }
  }
};

export default newOvertimeData;

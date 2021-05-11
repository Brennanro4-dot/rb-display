export const returnData = {
  type: "bar",
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
      },
};

export default returnData;

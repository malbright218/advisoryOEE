$(document).ready(function () {
  $.get("/api/data", data);

  function data(data) {
    console.log(data)
    var availability = [];
    var productivity = [];
    var quality = [];
    var oee = [];
    var labels = [];

    for (var i = 1; i < 13; i++) {
      availability.push(Object.entries(data[4])[i][1])
      productivity.push(Object.entries(data[5])[i][1])
      quality.push(Object.entries(data[6])[i][1])
      oee.push(Object.entries(data[7])[i][1])
      labels.push(Object.entries(data[16])[i][1])
    }
    
    var a = availability.map(function(x) {
      return Number(x * 100).toFixed(2)
    })
    var p = productivity.map(function(x) {
      return Number(x * 100).toFixed(2)
    })
    var q = quality.map(function(x) {
      return Number(x * 100).toFixed(2)
    })
    var o = oee.map(function(x) {
      return Number(x * 100).toFixed(2)
    })

    console.log(a)
    

    

    var ctx = document.getElementById("myChart1").getContext("2d");
    var myChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: data[8].note,
            data: a,
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "#01ABAA",
            lineTension: 0,
            borderWidth: 5,
          },
          {
            label: data[9].note,
            data: p,
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "#e5e338",
            lineTension: 0,
            borderWidth: 5,
          },
          {
            label: data[10].note,
            data: q,
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "#e7dfdd",
            lineTension: 0,
            borderWidth: 5,
          },
          {
            label: data[11].note,
            data: o,
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "#b82601",
            lineTension: 0,
            borderWidth: 5,
          }
          
        ],
      },
      options: {
        title: {
          display: true,
          text: "Printing APQ - OEE",
          fontColor: "#fff",
          fontSize: 24,
        },
        legend: {
          position: "bottom",
          labels: {
            fontColor: "#fff",
            fontSize: 24,
            boxWidth: 24,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 10,
                fontColor: "#fff",
                fontSize: 24,
              },
              gridLines: {
                color: "#ffffff50",
              },
            },
          ],
          xAxes: [
            {
              offset: true,
              ticks: {
                fontColor: "#fff",
                fontSize: 24,
              },
              gridLines: {
                color: "#ffffff50",
              },
            },
          ],
        },
      },
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});

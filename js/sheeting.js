$(document).ready(function () {
    console.log("hi")
 const data = [
     {id: "1",month1: "0.803",month2: "0.842",month3: "0.852",month4: "0.878",month5: "0.86",month6: "0.874",month7: "0.888",month8: "0.885",month9: "0.889",month10: "0.898",month11: "0.891",month12: "0.89",note: "Availability"},
     {id: "2",month1: "0.589",month2: "0.613",month3: "0.617",month4: "0.647",month5: "0.644",month6: "0.655",month7: "0.64",month8: "0.651",month9: "0.637",month10: "0.658",month11: "0.674",month12: "0.672",note: "Productivity"},
     {id: "3",month1: "1",month2: "1",month3: "1",month4: "0.999",month5: "0.995",month6: "0.997",month7: "0.996",month8: "0.995",month9: "0.996",month10: "0.994",month11: "0.994",month12: "0.975",note: "Quality"},
     {id: "4",month1: "0.473",month2: "0.516",month3: "0.526",month4: "0.567",month5: "0.551",month6: "0.571",month7: "0.566",month8: "0.573",month9: "0.564",month10: "0.587",month11: "0.597",month12: "0.583",note: "OEE"},
     {id: "5",month1: "0.712",month2: "0.719",month3: "0.709",month4: "0.772",month5: "0.756",month6: "0.75",month7: "0.725",month8: "0.752",month9: "0.747",month10: "0.722",month11: "0.735",month12: "0.757",note: "Availability"},
     {id: "6",month1: "0.691",month2: "0.731",month3: "0.711",month4: "0.717",month5: "0.73",month6: "0.753",month7: "0.755",month8: "0.78",month9: "0.764",month10: "0.778",month11: "0.783",month12: "0.76",note: "Productivity"},
     {id: "7",month1: "0.998",month2: "0.999",month3: "0.984",month4: "0.987",month5: "0.983",month6: "0.982",month7: "0.98",month8: "0.984",month9: "0.983",month10: "0.983",month11: "0.985",month12: "0.984",note: "Quality"},
     {id: "8",month1: "0.491",month2: "0.525",month3: "0.496",month4: "0.546",month5: "0.542",month6: "0.555",month7: "0.536",month8: "0.577",month9: "0.561",month10: "0.552",month11: "0.567",month12: "0.566",note: "OEE"},
     {id: "9",month1: "0.794",month2: "0.761",month3: "0.828",month4: "0.826",month5: "0.798",month6: "0.803",month7: "0.838",month8: "0.805",month9: "0.807",month10: "0.797",month11: "0.791",month12: "0.783",note: "Availability"},
     {id: "10",month1: "0.654",month2: "0.658",month3: "0.651",month4: "0.672",month5: "0.676",month6: "0.662",month7: "0.685",month8: "0.761",month9: "0.759",month10: "0.735",month11: "0.74",month12: "0.72",note: "Productivity"},
     {id: "11",month1: "0.993",month2: "0.989",month3: "0.99",month4: "0.986",month5: "0.988",month6: "0.99",month7: "0.99",month8: "0.991",month9: "0.989",month10: "0.988",month11: "0.99",month12: "0.988",note: "Quality"},
     {id: "12",month1: "0.516",month2: "0.495",month3: "0.534",month4: "0.547",month5: "0.533",month6: "0.526",month7: "0.568",month8: "0.607",month9: "0.606",month10: "0.579",month11: "0.579",month12: "0.557",note: "OEE"},
     {id: "13",month1: "0.756",month2: "0.757",month3: "0.73",month4: "0.783",month5: "0.782",month6: "0.794",month7: "0.811",month8: "0.811",month9: "0.789",month10: "0.812",month11: "0.763",month12: "0.701",note: "Availability"},
     {id: "14",month1: "0.673",month2: "0.684",month3: "0.742",month4: "0.779",month5: "0.793",month6: "0.778",month7: "0.811",month8: "0.821",month9: "0.771",month10: "0.822",month11: "0.814",month12: "0.816",note: "Productivity"},
     {id: "15",month1: "0.997",month2: "0.998",month3: "0.996",month4: "0.995",month5: "0.996",month6: "0.997",month7: "0.997",month8: "0.996",month9: "0.996",month10: "0.995",month11: "0.995",month12: "0.992",note: "Quality"},
     {id: "16",month1: "0.507",month2: "0.517",month3: "0.539",month4: "0.607",month5: "0.618",month6: "0.616",month7: "0.656",month8: "0.663",month9: "0.606",month10: "0.664",month11: "0.618",month12: "0.567",note: "OEE"},
     {id: "17",month1: "Nov 2019",month2: "Dec 2019",month3: "Jan 2020",month4: "Feb 2020",month5: "Mar 2020",month6: "Apr 2020",month7: "May 2020",month8: "Jun 2020",month9: "Jul 2020",month10: "Aug 2020",month11: "Sep 2020",month12: "Oct 2020",note: "period"}];

// console.log(data)

var availability = [];
var productivity = [];
var quality = [];
var oee = [];
var labels = [];

for (var i = 1; i < 13; i++) {
  availability.push(Object.entries(data[0])[i][1]);
  productivity.push(Object.entries(data[1])[i][1]);
  quality.push(Object.entries(data[2])[i][1]);
  oee.push(Object.entries(data[3])[i][1]);
  labels.push(Object.entries(data[16])[i][1]);
}

var a = availability.map(function (x) {
  return Number(x * 100).toFixed(2);
});
var p = productivity.map(function (x) {
  return Number(x * 100).toFixed(2);
});
var q = quality.map(function (x) {
  return Number(x * 100).toFixed(2);
});
var o = oee.map(function (x) {
  return Number(x * 100).toFixed(2);
});

// console.log(a);

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
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Sheeting APQ - OEE",
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

})
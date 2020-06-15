import React from "react";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const StockGraph = (props) => {
  if (props.data.dataStore.length === 0) {
    return null;
  }
  // console.log(props.data.name);
  const ti = props.data.name["2. Symbol"].toUpperCase();
  let options = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: ti,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the dummy year
        day: "%Y-%b-%d",
      },
      title: {
        text: "Date",
      },
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },

    series: [
      {
        type: "candlestick",
        name: "AAPL",
        data: [],
      },
      {
        type: "column",
        name: "Volume",
        data: [],
        yAxis: 1,
      },
    ],
  };
  // console.log(props.data.dataStore[0]["Date"]);
  var data = [];

  for (var i = 0; i < props.data.dataStore.length; i++) {
    var strDate = props.data.dataStore[i]["Date"];
    var dateParts = strDate.split("-");

    var temp = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    data.push([temp.getTime()]);
  }

  // console.log(data);

  const dataLength = props.data.dataStore.length;
  for (var j = dataLength - 1; j >= 0; j -= 1) {
    options.series[0].data.push([
      data[j][0] + 86400000, // the date
      parseInt(props.data.dataStore[j]["open"]), // open
      parseInt(props.data.dataStore[j]["high"]), // high
      parseInt(props.data.dataStore[j]["low"]), // low
      parseInt(props.data.dataStore[j]["close"]), // close
    ]);

    options.series[1].data.push([
      data[j][0] + 86400000, // the date
      parseInt(props.data.dataStore[j]["volume"]), // the volume
    ]);
  }
  // console.log(options);
  return (
    <div className="App">
      <HighchartsReact
        highcharts={HighStock}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default StockGraph;

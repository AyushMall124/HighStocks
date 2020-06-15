import React from "react";
import SearchBar from "./SearchBar";
// import _ from "lodash";
import StockGraph from "./StockGraph";
import NiftyGraph from "./NiftyGraph";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: null,
      dataStore: [],
    };
  }

  nifty_state = {
    name: null,
    dataStore: [],
  };
  onTermSubmit = (data) => {
    var DataStore = [];

    var temp = data["Time Series (Daily)"];
    for (var tempData in temp) {
      DataStore.push({
        Date: tempData,
        open: temp[tempData]["1. open"],
        high: temp[tempData]["2. high"],
        low: temp[tempData]["3. low"],
        close: temp[tempData]["4. close"],
        volume: temp[tempData]["5. volume"],
      });
    }
    this.setState({ dataStore: DataStore, name: data["Meta Data"] });
  };

  onTermSubmit_nifty = (data) => {
    var DataStore = [];

    var temp = data["Time Series (Daily)"];
    for (var tempData in temp) {
      DataStore.push({
        Date: tempData,
        open: temp[tempData]["1. open"],
        high: temp[tempData]["2. high"],
        low: temp[tempData]["3. low"],
        close: temp[tempData]["4. close"],
        volume: temp[tempData]["5. volume"],
      });
    }
    this.nifty_state.dataStore = DataStore;
    this.nifty_state.name = data["Meta Data"];
  };

  render() {
    return (
      <div>
        <div className=" ui container ">
          <SearchBar onTermSubmit={this.onTermSubmit} />
          <NiftyGraph onTermSubmit_nifty={this.onTermSubmit_nifty} />
        </div>
        <div className=" ui container ">
          <StockGraph data={this.state} />
          <StockGraph data={this.nifty_state} />

          {/* <NiftyGraph /> */}
        </div>
      </div>
    );
  }
}

export default App;

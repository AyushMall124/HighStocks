import React from "react";
import { fetchData, fetchNifty } from "../actions";
import { connect } from "react-redux";
// import NiftyGraph from "./NiftyGraph";

class SearchBar extends React.Component {
  state = { term: "IBM" };

  onFormSubmit = async (event) => {
    event.preventDefault();

    // console.log(this.state.term);
    await this.props.fetchData(this.state.term);

    // console.log(this.props.data);
    this.props.onTermSubmit(this.props.data);
    console.log(this.props);
    // await this.props.fetchNifty();
    // this.props.onTermSubmit_nifty(this.props.data);
    // console.log(this.props.data);

    // console.log(this.state.term);

    // this.props.onTermSubmit(this.state.term);
    //Make sure to call callback from parent
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Index Search</label>
            <input
              type="text"
              value={this.state.term.toUpperCase()}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
        {/* <div>
          <NiftyGraph data={this.props.d} />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.stock.data };
};

export default connect(mapStateToProps, { fetchData, fetchNifty })(SearchBar);

import React from "react";
import { fetchNifty } from "../actions";
import { connect } from "react-redux";

class NiftyGraph extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchNifty();
    this.props.onTermSubmit_nifty(this.props.data);
  };

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.stock.data };
};

export default connect(mapStateToProps, { fetchNifty })(NiftyGraph);

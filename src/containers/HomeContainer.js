import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
// import { getUsersList, deleteDataUser } from "../actions/userAction";
import { getProductsList } from "../actions/productAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsList());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);

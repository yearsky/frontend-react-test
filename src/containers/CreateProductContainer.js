import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postProductsCreate } from "../actions/productAction";

const mapStateToProps = (state) => {
  return {
    getProducts: state.products.product,
    errorResponDataProducts: state.products.errorResponDataProducts,
  };
};

class CreateProductContainer extends Component {
  handleSubmit(data) {
    const formData = new FormData();
    formData.append("picture", data.picture);
    formData.append("qty", data.qty);
    formData.append("name", data.name);
    formData.append("expiredAt", data.expiredAt);
    formData.append("isActive", true);

    this.props.storeProduct(formData);
    // console.log(formData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.storeProduct) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Create Product</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  storeProduct: (data) => dispatch(postProductsCreate(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductContainer);

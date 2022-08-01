import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getProductsDetail, putProductsUpdate } from "../actions/productAction";

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    errorResponDataProduct: state.products.errorResponDataProducts,
  };
};

class EditProductContainer extends Component {
  componentDidMount() {
    this.props.getProductsDetail(this.props.match.params.id);
  }

  handleSubmit(data) {
    const formData = new FormData();
    formData.append("picture", data.picture);
    formData.append("qty", data.qty);
    formData.append("name", data.name);
    formData.append("expiredAt", data.expiredAt);
    formData.append("isActive", data.isActive);

    this.props.updateProducts(formData, this.props.match.params.id);
    // console.log(data);
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errorResponDataProduct === true) {
  //     this.props.history.push("/");
  //   }
  //   console.log(nextProps);
  // }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Edit Products</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getProductsDetail: (id) => dispatch(getProductsDetail(id)),
  updateProducts: (data, id) => dispatch(putProductsUpdate(data, id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductContainer);

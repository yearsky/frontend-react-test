import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import ProductValidation from "../validations/ProductValidation";
import { FieldDatePicker } from "./DatePicker";
import FileUploadComponent from "./FileUpload";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.products.product.name,
      qty: state.products.product.qty,
      picture: state.products.product.picture,
      expiredAt: state.products.product.expiredAt,
      isActive: state.products.product.isActive,
    },
  };
};

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange(e.target.files[0]);
  }
  render() {
    const pathname = this.props.location.pathname;
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup row>
            <Col md={6}>
              <FormGroup>
                <Field
                  type="text"
                  name="name"
                  component={renderField}
                  label="Name :"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Field
                  type="text"
                  name="qty"
                  component={renderField}
                  label="Quantity :"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <FileUploadComponent />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label htmlFor="{input}" className="col-form-label">
                      Expired At
                    </Label>
                  </Col>
                  <Col md="12">
                    <FieldDatePicker
                      name="expiredAt"
                      placeholder="Expired At"
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            {pathname === "/create" ? null : (
              <Col md={6}>
                <FormGroup>
                  <Field
                    type="checkbox"
                    name="isActive"
                    component={renderField}
                    label="isActive :"
                  />
                </FormGroup>
              </Col>
            )}
          </FormGroup>

          <FormGroup row>
            <Col md="12">
              <FormGroup>
                <Button
                  color="dark"
                  type="submit"
                  disabled={this.props.submitting}
                >
                  Submit
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
        </form>
      </>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateProduct",
  validate: ProductValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(withRouter(FormComponent));

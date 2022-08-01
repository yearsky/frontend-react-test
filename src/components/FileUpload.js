import React, { Component } from "react";
import { Field } from "redux-form";
import { Col, Label, Row } from "reactstrap";

class FileUploadComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "FileUpload",
    };
  }

  renderInput = ({ input, type, meta, label }) => {
    const { mime } = this.props;
    return (
      <div>
        <Row>
          <Col md="12">
            <Label htmlFor="{input}" className="col-form-label">
              {label}
            </Label>
          </Col>
          <Col md="12">
            <input
              name={input.name}
              type={type}
              accept={mime}
              onChange={(event) => this.handleChange(event, input)}
            />
          </Col>
        </Row>
      </div>
    );
  };

  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    console.log(imageFile);
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };

  render() {
    // const { handleSubmit } = this.props;

    return (
      <Field
        name="picture"
        label="Picture :"
        type="file"
        component={this.renderInput}
      />
    );
  }
}

export default FileUploadComponent;

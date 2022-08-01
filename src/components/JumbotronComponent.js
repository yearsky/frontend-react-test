import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.products.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);

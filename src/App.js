import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateProductContainer from "./containers/CreateProductContainer";
import EditProductContainer from "./containers/EditProductContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />

          <Route path="/create" exact component={CreateProductContainer} />

          <Route path="/edit/:id" exact component={EditProductContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

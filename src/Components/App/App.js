import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { GetApiProvider } from "../../Context/GetApi/GetApi";
import Search from "../Search/Search";
import Preview from "../Preview/Preview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetApiProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/shows/:id" component={Preview} />
            </Switch>
          </BrowserRouter>
        </GetApiProvider>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import "./scss/main.scss";
import Sidebar from "./component/SideBar/Sidebar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import routes from "./routes/routes";
import TopCartContainer from "./container/TopCartContainer";

export default class App extends Component {
  showRoutes = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        );
      });
    }

    return result;
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Sidebar />
          <TopCartContainer   />
          <Switch>
            {this.showRoutes(routes)}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

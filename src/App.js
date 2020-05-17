import React, { Fragment } from "react";
import "./App.css";
import "./scss/main.scss";
import Wrapper from "./page/Wrapper";
import Sidebar from "./component/SideBar/Sidebar";

function App() {
  return <Fragment>
    <Sidebar />
    <Wrapper />
  </Fragment>
}

export default App;

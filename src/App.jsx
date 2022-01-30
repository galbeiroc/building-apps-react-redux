import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
};

export default App;

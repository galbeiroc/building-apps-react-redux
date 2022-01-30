import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import CoursePage from "./components/courses/CoursePage";
import HomePage from "./components/home/HomePage";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
};

export default App;

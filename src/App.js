import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "container/MainContainer";



function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route />
    </Switch>
  );
}

export default App;

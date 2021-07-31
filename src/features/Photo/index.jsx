import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import AddEditPage from "./pages/addEdit/AddEditPage/AddEditPage";
import NotFound from "components/NotFound";

export default function Photo() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoID`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

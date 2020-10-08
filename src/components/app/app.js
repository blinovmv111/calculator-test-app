import React from "react";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import AppHeader from "../app-header";
import { CalculatorPage, TextPage } from "../pages";
import WithApiService from "../hoc";

function App({ ApiService }) {
  return (
    <>
      <AppHeader />
      <div className="main-field">
        <div className="popap">
          <Switch>
            <Route path="/" component={CalculatorPage} exact />
            <Route path="/calculatorPage/" component={CalculatorPage} />
            <Route path="/textPage/" component={TextPage} exact />
            <Route
              path="/textPage/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <TextPage id={id} />;
              }}
            />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default WithApiService()(App);

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ProvideAuth } from "@hooks/useAuth";
import { Home } from "@pages/Home";

export const Router = () => {
  return (
    <ProvideAuth>
      <BrowserRouter basename="/">
        <Container>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </ProvideAuth>
  );
};

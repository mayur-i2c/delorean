import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "./Container/index";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ route, Component }, idx) => (
          <Route
            key={idx}
            path={route}
            exact
            render={(props) => (
              <Container>
                <Component {...props} />
              </Container>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

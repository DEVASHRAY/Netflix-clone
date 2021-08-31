import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserLoggedIn, ProtectedRoute } from "./helpers/routes";
import { Browse, Home, Signin, Signup } from "./pages";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <IsUserLoggedIn
          path={ROUTES.SIGN_IN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Signin />
        </IsUserLoggedIn>

        <IsUserLoggedIn
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Signup />
        </IsUserLoggedIn>

        <IsUserLoggedIn
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Home />
        </IsUserLoggedIn>

        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Router>
    </>
  );
}

export default App;

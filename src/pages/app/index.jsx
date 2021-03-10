import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";

import RouteWithSubRoutes from "@/routes";
import routesModule from "@/routes/modules";

import "./index.less";

const isLogin = true;

export default function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} path="/">
              <Redirect to={isLogin ? "/layout/dashboard" : "/login"} />
            </Route>
            {routesModule.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>404</h1>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

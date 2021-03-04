import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, DatePicker, version } from "antd";
import Console from "../console";

import "./index.less";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Console />
        </Route>
        <Route path="/console">
          <Console>
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Button>
          </Console>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-h2">
      <h2>Home123</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

import React from "react";
import "./Fontawesomeicons";
import "./App.css";
import UsersList from "./UsersList";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import Homepage from "./Homepage";

import { FormProvider } from "./FormContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <FormProvider>
      <div>
        <Router>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/details" exact component={UsersList} />
        </Router>
      </div>
    </FormProvider>
  );
}

export default App;

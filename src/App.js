import React from "react";
import "./Fontawesomeicons";
import "./App.css";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import { FormProvider } from "./FormContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <FormProvider>
      <div>
        <Router>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    </FormProvider>
  );
}

export default App;

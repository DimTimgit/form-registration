import React, { useState, useContext, useEffect, useRef } from "react";
import { FormContext } from "./FormContext";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, setError, watch } = useForm({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useContext(FormContext);

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    history.push("/login");
    alert(JSON.stringify(data));
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  function onSubmitForm(data) {
    console.log(data);
  }
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 style={{ borderBottom: "3px dotted rgb(212, 212, 212)" }}>
          Registration Form
        </h1>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              className=" "
              placeholder="First Name"
              type="text"
              value={name}
              name="name"
              ref={register({ required: "Enter your name *" })}
              onChange={updateName}
            />
            {errors.name && (
              <p className="error">
                <span style={{ color: "red" }}>{errors.name.message}</span>
              </p>
            )}
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className=""
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              ref={register({
                required: "Enter your e-mail *",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                },
              })}
              onChange={updateEmail}
            />
            {errors.email && (
              <p className="error">
                <span style={{ color: "red" }}>{errors.email.message}</span>
              </p>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className=" "
              placeholder="Password"
              type="password"
              name="password"
              ref={register({
                required: "You must specify a password *",
                minLength: {
                  value: 6,
                  message: "password must have atleast 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="error">
                <span style={{ color: "red" }}>{errors.password.message}</span>
              </p>
            )}
          </div>

          <div className="repassword">
            <label htmlFor="repassword">Repeat password</label>
            <input
              className=" "
              placeholder="Retype Password"
              type="password"
              name="repassword"
              ref={register({
                required: "Retype your password *",
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.repassword && (
              <p className="error">
                <span style={{ color: "red" }}>
                  {errors.repassword.message}
                </span>
              </p>
            )}
          </div>

          <div className="createAccount">
            <Link to="/login" style={{width:"100%"}}>
              <button type="submit" onClick={handleSubmit(onSubmit)}>
                CREATE ACCOUNT
              </button>
            </Link>
            <small className="signin">
              Already Have an Account?
              <Link to="/login">
                <strong> SIGNIN</strong>
              </Link>
            </small>

            {errors.name &&
              errors.email &&
              errors.password &&
              "All fields are required"}
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;

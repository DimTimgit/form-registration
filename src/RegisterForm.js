import React, { useState, useContext, useEffect, useRef } from "react";
import { FormContext } from "./FormContext";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Dropdown from "./Dropdown";
import './Dropdown.scss';

function RegisterForm() {
  const history = useHistory();
  const { register, handleSubmit, errors, setError, watch } = useForm({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  function onSubmitForm(data) {
    console.log(data);
  }

  const items = [
    {
      id: 1,
      value: 'Pulp Fiction',
    },
    {
      id: 2,
      value: 'The Prestige',
    },
    {
      id: 3,
      value: 'Blade Runner 2049',
    },
  ];

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>
          Регистрация
        </h1>
        <small className="signin">
          Уже есть аккаунт?
              <Link to="/login">
            <strong className="login_open">Войти</strong>
          </Link>
        </small>

        <div className="container">
          <h1 style={{ textAlign: 'center' }}>
            Buy Movies{' '}
            <span role="img" aria-label="Movie projector">
              🎥
        </span>
          </h1>
          <Dropdown title="Select movie" items={items} multiSelect />
        </div>

        <form className="register" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="firstName">
            <label htmlFor="firstName">Имя</label>
            <input
              className=""
              placeholder="Введите Ваше имя"
              type="text"
              value={name}
              name="name"
              ref={register({
                required: "Введено некорректное значение",
                pattern: {
                  value: /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z- \.]{1,20}$/,
                  message: "Введите действительное имя",
                },

              })}
              onChange={updateName}
            />
            {errors.name && (
              <p className="error">
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className=""
              placeholder="Введите Ваш Email"
              type="email"
              name="email"
              value={email}
              ref={register({
                required: "Введено некорректное значение",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Введите действительный адрес электронной почты",
                },
              })}
              onChange={updateEmail}
            />
            {errors.email && (
              <p className="error">
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          <div className="phone">
            <label htmlFor="phone">Номер телефона</label>
            <input
              className=" "
              placeholder="Введите номер телефона"
              type="text"
              value={phone}
              name="phone"
              ref={register({
                required: "Введено некорректное значение",
                pattern: {
                  value: /^[0-9|\ |\-|\(|\)|\+]{10,17}[0-9|\ |\-|\(|\)]$/,
                  message: "Введите действительный номер телефона",
                },

              })}
              onChange={updatePhone}
            />
            {errors.phone && (
              <p className="error">
                <span>{errors.phone.message}</span>
              </p>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Пароль</label>
            <input
              className=" "
              placeholder="Введите Ваш пароль"
              type="password"
              name="password"
              ref={register({
                required: "Введено некорректное значение",
                minLength: {
                  value: 6,
                  message: "пароль должен содержать не менее 6 символов",
                },
              })}
            />
            {errors.password && (
              <p className="error">
                <span>{errors.password.message}</span>
              </p>
            )}
          </div>

          <div className="repassword">
            <label htmlFor="repassword">Повторите пароль</label>
            <input
              className=" "
              placeholder="Повторите пароль"
              type="password"
              name="repassword"
              ref={register({
                required: "Введено некорректное значение",
                validate: (value) =>
                  value === password.current || "Пароли не совпадают",
              })}
            />
            {errors.repassword && (
              <p className="error">
                <span>
                  {errors.repassword.message}
                </span>
              </p>
            )}
          </div>

          <div className="createAccount">
            <Link to="/login" style={{ width: "100%" }}>
              <button type="submit" onClick={handleSubmit(onSubmit)}>
                Зарегистрироваться
              </button>
            </Link>
            {errors.name &&
              errors.email &&
              errors.phone &&
              errors.password &&
              "Все поля обязательны для заполнения"}
          </div>
        </form>
      </div>
    </div>

  );
};
export default RegisterForm;

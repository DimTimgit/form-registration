import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        <h1>
          Авторизация
        </h1>
        <small className="signin">
          Уже есть аккаунт?
              <Link to="/">
            <strong className="login_open">Регистрация</strong>
          </Link>
        </small>
        <form className="register" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="firstName">
            <label htmlFor="firstName">Имя</label>
            <input
              className=" "
              placeholder="Введите Ваше имя"
              type="text"
              value={name}
              name="name"
              ref={register({ required: "Введите Ваше имя" })}
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
              placeholder="Введите Ваш Email"
              type="email"
              name="email"
              value={email}
              ref={register({
                required: "Введите Ваш Email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Введите действительный адрес электронной почты",
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
        </form>
        <div className="createAccount">
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            ВОЙТИ
            </button>
          {errors.name &&
            errors.email &&
            "Все поля обязательны для заполнения"}
        </div>
      </div>
    </div>
  );
};
export default Login;

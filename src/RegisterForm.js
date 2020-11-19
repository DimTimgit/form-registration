import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState(false);
  const [tnc, setTnc] = useState(false);

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
  const updateLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const updateTnc = (e) => {
    setTnc(e.target.checked);
  };

  function onSubmitForm(data) {
    console.log(data);
  }
  function getFormData(e) {
    console.warn(tnc)
    e.preventDefault()
  }

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
              placeholder="Введите номер"
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

          <div className="language">
            <label htmlFor="language">Язык</label>
            <select
              className="custom-select"
              name="language"
              value={language}
              placeholder="Язык"
              ref={register({
                required: "Введено некорректное значение",
              })}
              onChange={updateLanguage}
            >
              <option></option>
              <option>Русский</option>
              <option>Английский</option>
              <option>Китайский</option>
              <option>Испанский</option>
            </select>
            {errors.language && (
              <p className="error">
                <span>{errors.language.message}</span>
              </p>
            )}
          </div>

          <div className="checkbox">
            <label for="check"></label>
            <input id="check"
              type="checkbox"
              value="check"
              name="tnc"
              value={tnc}
              ref={register({
                required: "Введено некорректное значение",
              })}
              onChange={updateTnc}
            />
            <span className="accept_use">Принимаю <a href="#" className="conditions">условия</a> использования</span>
            {errors.tnc && (
              <p className="error">
                <span>{errors.tnc.message}</span>
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
              errors.language &&
              errors.tnc &&
              "Все поля обязательны для заполнения"}
          </div>
        </form>
      </div>
    </div>

  );
};
export default RegisterForm;

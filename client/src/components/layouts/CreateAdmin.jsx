import React, { useContext, useState } from "react";

import { Button, Form } from "react-bootstrap";
import InputAuth from "../UI/InputAuth";

import { registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const CreateAdmin = observer(({ show, onHide }) => {
  const { user } = useContext(Context);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const click = async () => {
    try {
      await registration(email, password);

      user.setUser(user);
      user.setIsAuth(true);

    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const visible = () => {
    if (lastName === "") setSelInput("");
    if (firstName === "") setSelInput("");
    if (email === "") setSelInput("");
    if (password === "") setSelInput("");
  };

  return (
    <div>
      {show && <form className={"main_page"} onClick={() => visible()}>
        <div className={'create_admin_title'}>Регистрация нового администратора</div>
        <div className={"reg_inputs"} onClick={e => e.stopPropagation()}>
          <InputAuth
            type="text"
            name="lastName"
            selectedInput={selInput}
            value={lastName}
            onFocus={() => setSelInput("lastName")}
            onChange={e => setEmail(e.target.value)}
          >
            Фамилия
          </InputAuth>
          <InputAuth
            type="text"
            name="firstName"
            selectedInput={selInput}
            value={firstName}
            onFocus={() => setSelInput("firstName")}
            onChange={e => setEmail(e.target.value)}
          >
            Имя
          </InputAuth>
          <InputAuth
            type="text"
            name="email"
            selectedInput={selInput}
            value={email}
            onFocus={() => setSelInput("email")}
            onChange={e => setEmail(e.target.value)}
          >
            Email
          </InputAuth>
          <InputAuth
            type="password"
            name="password"
            selectedInput={selInput}
            value={password}
            onFocus={() => setSelInput("password")}
            onChange={e => setPassword(e.target.value)}
          >
            Пароль
          </InputAuth>
        </div>
        <div className={'reg_buttons'}>
          <Button className={"submit-btn"} onClick={onHide}>Закрыть</Button>
          <Button className={"submit-btn"} onClick={click}>Зарегистрировать</Button>
        </div>
      </form>
      }
    </div>);
});

export default CreateAdmin;
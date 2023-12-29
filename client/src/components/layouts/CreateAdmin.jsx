import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import InputAuth from "../UI/InputAuth";

import { registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { ButtonSubmit } from "../UI/ButtonStyle";

const FormCreateAdmin = observer(() => {
  const { user } = useContext(Context);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [selInput, setSelInput] = useState("");

  const click = async () => {
    try {
      user.setUser(user);
      user.setIsAuth(true);
    } catch (e) {
      alert(e.response.data.message);
    }
    await registration(email, password, lastName, firstName, surName, role);
  };

  const visible = () => {
    if (lastName === "") setSelInput("");
    if (firstName === "") setSelInput("");
    if (email === "") setSelInput("");
    if (password === "") setSelInput("");
  };

  return (
    <form className={"main_layout"} onClick={() => visible()}>
      <div className={"create_admin_title"}>
        Регистрация нового администратора
      </div>
      <div className={"reg_inputs"} onClick={e => e.stopPropagation()}>
        <InputAuth
          type="text"
          name="lastName"
          selectedInput={selInput}
          value={lastName}
          onFocus={() => setSelInput("lastName")}
          onChange={e => setLastName(e.target.value)}
        >
          Фамилия
        </InputAuth>
        <InputAuth
          type="text"
          name="firstName"
          selectedInput={selInput}
          value={firstName}
          onFocus={() => setSelInput("firstName")}
          onChange={e => setFirstName(e.target.value)}
        >
          Имя
        </InputAuth>
        <InputAuth
          type="text"
          name="surName"
          selectedInput={selInput}
          value={surName}
          onFocus={() => setSelInput("surName")}
          onChange={e => setSurName(e.target.value)}
        >
          Отчество
        </InputAuth>
        <InputAuth
          type="text"
          name="email"
          selectedInput={selInput}
          value={email}
          onFocus={() => setSelInput("email")}
          onChange={e => setEmail(e.target.value)}
        >
          Логин
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
        <InputAuth
          type="text"
          name="role"
          selectedInput={selInput}
          value={role.toUpperCase()}
          onFocus={() => setSelInput("role")}
          onChange={e => setRole(e.target.value)}
        >
          Роль
        </InputAuth>
      </div>
      <div className={"reg_buttons"}>
        <ButtonSubmit onClick={click}>
          Зарегистрировать
        </ButtonSubmit>
      </div>
    </form>
  );
});

export default FormCreateAdmin;

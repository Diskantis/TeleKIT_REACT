import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import SideBar from "../../components/layouts/SideBar";
import InputAuth from "../../components/UI/InputAuth";

import { SCHEDULE_ROUTE } from "../../router/routes";
import { useHistory } from "react-router-dom";
import { registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const Registration = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const click = async () => {
    try {
      await registration(email, password);

      user.setUser(user);
      user.setIsAuth(true);
      history.push(SCHEDULE_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const visible = () => {
    if (email === "") setSelInput("");
    if (password === "") setSelInput("");
  };

  return (
    <div>
      <div className="main">
        <SideBar />
        <form className={"main_layout"} onClick={() => visible()}>
          <h1 className={"title_page"}>Регистрация</h1>
          <div className={"inputs"} onClick={e => e.stopPropagation()}>
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
          <Button className={"submit-btn"} onClick={click}>
            Зарегистрировать
          </Button>
        </form>
      </div>
    </div>
  );
});

export default Registration;

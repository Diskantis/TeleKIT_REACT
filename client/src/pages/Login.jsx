import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import SideBar from "../components/layouts/SideBar";
import InputAuth from "../components/UI/InputAuth";

import { useHistory } from "react-router-dom";
import { MAIN_ROUTE } from "../router/routes";
import { login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Login = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const click = async () => {
    try {
      await login(email, password);

      user.setUser(user);
      user.setIsAuth(true);
      history.push(MAIN_ROUTE);
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
        <SideBar>
          <p className={"side_title"}>ТЕЛЕВИЗИОННЫЙ ЖУРНАЛИСТСКИЙ КОМПЛЕКТ</p>
          <small className={"side_author"}>by Zajkov Mikhail</small>
        </SideBar>
        <div className={"main_page"} onClick={() => visible()}>
          <div className={"title_page"}>Авторизация</div>
          <div className={"main_layout"}>
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
              Войти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;

import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import SideBar from "../components/layouts/SideBar";
import InputAuth from "../components/UI/InputAuth";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SCHEDULE_ROUTE } from "../router/routes";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Login = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      console.log(user);
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
        <form className={'main_page'} onClick={() => visible()}>
          <h1 className={'title_page'}>{isLogin ? "Авторизация" : "Регистрация"}</h1>
          <div className={'inputs'} onClick={e => e.stopPropagation()}>
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
          {isLogin ? <div
              style={{ color: "white", fontSize: 18, marginBottom: 20 }}
            >
              Нет аккаунта?
              <NavLink to={REGISTRATION_ROUTE} style={{ color: "blue", marginLeft: 10 }}
              >
                Зарегистрируйтесь
              </NavLink>
            </div>
            :
            <div
              style={{ color: "white", fontSize: 18, marginBottom: 20 }}
            >
              Есть аккаунт?
              <NavLink to={LOGIN_ROUTE} style={{ color: "blue", marginLeft: 10 }}
              >
                Авторизуйтесь
              </NavLink>
            </div>
          }
          <Button className={"submit-btn"} onClick={click}>{isLogin ? "Войти" : "Регистрация"}
          </Button>
        </form>
      </div>
    </div>
  )
    ;
});

export default Login;
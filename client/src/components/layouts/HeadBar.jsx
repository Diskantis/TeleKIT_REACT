import React, { useContext } from "react";

import LogoutSVG from "../UI/icon/LogoutSVG";
import DateNow from "../UI/DateNow";
import Clock from "../UI/Clock";

import { LOGIN_ROUTE, MAIN_ROUTE } from "../../router/routes";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import MainSVG from "../UI/icon/MainSVG";

const HeadBar = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isMain = location.pathname !== MAIN_ROUTE;

  const lastName = localStorage.getItem("last_name");
  const firstName = localStorage.getItem("first_name");
  const surName = localStorage.getItem("sur_name");

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
    localStorage.clear();
  };

  return (
    <div className={"headBar"}>
      {user.isAuth ? (
        <div className={"headBar_nav"}>
          <LogoutSVG className={"logout_svg active"} onClick={() => logOut()} />
          <NavLink className={"logo_link"} to={MAIN_ROUTE}>
            TeleKIT
          </NavLink>
          {isMain ? (
            <MainSVG
              className={"main_svg active"}
              onClick={() => history.push(MAIN_ROUTE)}
            />
          ) : (
            <MainSVG className={"main_svg"} />
          )}
        </div>
      ) : (
        <div className={"headBar_nav"}>
          <LogoutSVG className={"logout_svg"} />
          <NavLink className={"logo_link"} to={MAIN_ROUTE}>
            TeleKIT
          </NavLink>
          <MainSVG className={"main_svg"} />
        </div>
      )}
      <div className={"header"}>
        <div className={"auth_user"}>
          {user.isAuth
            ? `Пользователь: ${lastName} ${firstName[0]}.${surName[0]}.`
            : ""}
        </div>
        <DateNow />
        <Clock />
      </div>
    </div>
  );
});

export default HeadBar;

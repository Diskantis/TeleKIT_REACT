import React, { useContext } from "react";

import SideBar from "../components/layouts/SideBar";
import { ADMIN_ROUTE } from "../utils/consts";

import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { EMPLOYEE_ROUTE, EQUIPMENT_ROUTE, KITS_ROUTE, SCHEDULE_ROUTE } from "../router/routes";
import CalendarSVG from "../components/UI/icon/CalendarSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import CameraSVG from "../components/UI/icon/CameraSVG";
import PeopleSVG from "../components/UI/icon/PeopleSVG";
import AdminSVG from "../components/UI/icon/AdminSVG";


const Main = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <div className="main">
      <SideBar>
        <ul className="side-menu">
          <li><a className="side-menu_item" onClick={() => history.push(SCHEDULE_ROUTE)}><CalendarSVG/>Расписание</a></li>
          <li><a className="side-menu_item" onClick={() => history.push(KITS_ROUTE)}><KitSVG/>Комплекты</a></li>
          <li><a className="side-menu_item" onClick={() => history.push(EQUIPMENT_ROUTE)}><CameraSVG/>Оборудование</a></li>
          <li><a className="side-menu_item" onClick={() => history.push(EMPLOYEE_ROUTE)}><PeopleSVG/>Персонал</a></li>
          <br/>
          <li><a className="side-menu_item" onClick={() => history.push(ADMIN_ROUTE)}><AdminSVG/>Админ панель</a></li>
        </ul>
      </SideBar>
    </div>
  )
});

export default Main;

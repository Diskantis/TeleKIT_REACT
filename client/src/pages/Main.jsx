import React from "react";

import SideBar from "../components/layouts/SideBar";

import { observer } from "mobx-react-lite";
import {
  SCHEDULE_ROUTE,
  KITS_ROUTE,
  EQUIPMENT_ROUTE,
  RECIPIENT_LIST_ROUTE,
  ADMIN_CREATE_ADMIN_ROUTE
} from "../router/routes";

import CalendarSVG from "../components/UI/icon/CalendarSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import CameraSVG from "../components/UI/icon/CameraSVG";
import PeopleSVG from "../components/UI/icon/PeopleSVG";
import AdminSVG from "../components/UI/icon/AdminSVG";
import ListSideMenu from "../components/layouts/ListSideMenu";

const Main = observer(() => {
  return (
    <div className="main">
      <SideBar>
        <ListSideMenu
          items={[
            {
              icon: <CalendarSVG />,
              name: "Расписание",
              link: SCHEDULE_ROUTE
            },
            {
              icon: <KitSVG />,
              name: "Комплекты",
              link: KITS_ROUTE
            },
            {
              icon: <CameraSVG />,
              name: "Оборудование",
              link: EQUIPMENT_ROUTE
            },
            {
              icon: <PeopleSVG />,
              name: "Получатели",
              link: RECIPIENT_LIST_ROUTE
            },
            {
              icon: <AdminSVG />,
              name: "Админ панель",
              link: ADMIN_CREATE_ADMIN_ROUTE
            }
          ]}
        />
      </SideBar>
    </div>
  );
});

export default Main;

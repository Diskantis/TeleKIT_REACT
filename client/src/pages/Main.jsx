import React, { useContext } from "react";

import SideBar from "../components/layouts/SideBar";
import { ADMIN_ROUTE } from "../utils/consts";

import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {
  RECIPIENT_ROUTE,
  EQUIPMENT_ROUTE,
  KITS_ROUTE,
  SCHEDULE_ROUTE
} from "../router/routes";

import CalendarSVG from "../components/UI/icon/CalendarSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import CameraSVG from "../components/UI/icon/CameraSVG";
import PeopleSVG from "../components/UI/icon/PeopleSVG";
import AdminSVG from "../components/UI/icon/AdminSVG";
import ListSideMenu from "../components/ListSideMenu";

const Main = observer(() => {
  const { user } = useContext(Context);

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
              link: RECIPIENT_ROUTE
            },
            {
              icon: <AdminSVG />,
              name: "Админ панель",
              link: ADMIN_ROUTE
            }
          ]}
        />
      </SideBar>
    </div>
  );
});

export default Main;

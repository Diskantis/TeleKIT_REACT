import React from "react";

import ListSideMenu from "../components/layouts/ListSideMenu";

import SideBar from "../components/layouts/SideBar";
import CalendarSVG from "../components/UI/icon/CalendarSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import CameraSVG from "../components/UI/icon/CameraSVG";

import { observer } from "mobx-react-lite";
import { EQUIPMENT_ROUTE } from "../router/routes";

const Equipment = observer(() => {
  return (
    <div>
      <div className="main">
        <SideBar>
          <ListSideMenu
            items={[
              {
                icon: <CalendarSVG />,
                name: "Добавить тип",
                link: EQUIPMENT_ROUTE
              },
              {
                icon: <KitSVG />,
                name: "Добавить бренд",
                link: EQUIPMENT_ROUTE
              },
              {
                icon: <CameraSVG />,
                name: "Добавить устройство",
                link: EQUIPMENT_ROUTE
              }
            ]}
          />
        </SideBar>
        <div className={"main_layout"}>
          <div className={"title_page"}>Оборудование</div>
          <div className={"main_page"}></div>
        </div>
      </div>
    </div>
  );
});

export default Equipment;

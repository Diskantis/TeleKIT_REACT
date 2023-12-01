import React from "react";

import SideBar from "../components/layouts/SideBar";
import {
  ADMIN_CREATE_ADMIN_ROUTE,
  ADMIN_CREATE_EQUIPMENT_ROUTE
} from "../router/routes";

import { observer } from "mobx-react-lite";

import CameraSVG from "../components/UI/icon/CameraSVG";
import EmployeeSVG from "../components/UI/icon/EmployeeSVG";

import CreateEquipment from "../components/layouts/CreateEquipment";
import ListSideMenu from "../components/layouts/ListSideMenu";

const AdminCreateEquipment = observer(() => {
  return (
    <div>
      <div className="main">
        <SideBar>
          <ListSideMenu
            items={[
              {
                icon: <EmployeeSVG />,
                name: "Добавить администратора",
                link: ADMIN_CREATE_ADMIN_ROUTE
              },
              {
                icon: <CameraSVG />,
                name: "Добавить оборудование",
                link: ADMIN_CREATE_EQUIPMENT_ROUTE
              }
            ]}
          />
        </SideBar>
        <div className={"main_layout"}>
          <div className={"title_page"}>Административная панель</div>
          <div className={"main_page"}>
            <CreateEquipment />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AdminCreateEquipment;

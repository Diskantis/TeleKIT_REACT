import React from "react";

import SideBar from "../components/layouts/SideBar";
import {
  ADMIN_CREATE_ADMIN_ROUTE,
  ADMIN_CREATE_EQUIPMENT_ROUTE
} from "../router/routes";

import { observer } from "mobx-react-lite";

import CameraSVG from "../components/UI/icon/CameraSVG";
import EmployeeSVG from "../components/UI/icon/EmployeeSVG";

import ListSideMenu from "../components/layouts/ListSideMenu";
import FormCreateAdmin from "../components/layouts/CreateAdmin";

const AdminCreateAdmin = observer(() => {
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
            <FormCreateAdmin />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AdminCreateAdmin;

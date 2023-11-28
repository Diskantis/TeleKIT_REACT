import React, { useState } from "react";
import SideBar from "../components/layouts/SideBar";
import { SCHEDULE_ROUTE, EQUIPMENT_ROUTE, KITS_ROUTE, EMPLOYEE_ROUTE } from "../router/routes";
import CameraSVG from "../components/UI/icon/CameraSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import { observer } from "mobx-react-lite";
import EmployeeSVG from "../components/UI/icon/EmployeeSVG";
import CreateAdmin from "../components/layouts/CreateAdmin";
import CreateEquipment from "../components/layouts/CreateEquipment";

const Admin = observer(() => {
  const [employeeVisible, setEmployeeVisible] = useState(false);
  const [equipmentVisible, setEquipmentVisible] = useState(false);

  return (
    <div>
      <div className="main">
        <SideBar>
          <ul className="side-menu">
            <li><a className="side-menu_item"
                   onClick={() => setEmployeeVisible(true)}><EmployeeSVG />Добавить администратора</a></li>
            <li><a className="side-menu_item"
                   onClick={() => setEquipmentVisible(true)}><CameraSVG />Добавить оборудование</a></li>
          </ul>
        </SideBar>
        <div className={"main_page"}>
          <div className={"title_page"}>Административная панель</div>
          <div className={"main_layout"}>
            <CreateAdmin
              show={employeeVisible}
              onHide={() => setEmployeeVisible(false)} />
            <CreateEquipment
              show={equipmentVisible}
              onHide={() => setEquipmentVisible(false)} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Admin;
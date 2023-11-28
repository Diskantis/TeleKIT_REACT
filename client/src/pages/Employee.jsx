import React from "react";

import SideBar from "../components/layouts/SideBar";

import { observer } from "mobx-react-lite";

const Employee = observer(() => {
  return (
    <div>
      <div className="main">
        <SideBar>
          <ul className="side-menu">
            {/*<li><a className="side-menu_item" to={KITS_ROUTE}><KitSVG/>Создать комплект</a></li>*/}
            {/*<li><a className="side-menu_item" onClick={() => setEmployeeVisible(true)}><EmployeeSVG/>Добавить сотрудника</a></li>*/}
            {/*<li><a className="side-menu_item" to={EQUIPMENT_ROUTE}><CameraSVG/>Добавить оборудование</a></li>*/}
          </ul>
        </SideBar>
        <div className={"main_page"}>
          <div className={"title_page"}>Персонал</div>
          <div className={"main_layout"}></div>
        </div>
      </div>
    </div>
  );
});

export default Employee;

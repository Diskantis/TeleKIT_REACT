import React, {useState} from 'react';

import SideBar from "../components/layouts/SideBar";
import CalendarSVG from "../components/UI/icon/CalendarSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import CameraSVG from "../components/UI/icon/CameraSVG";

import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import { observer } from "mobx-react-lite";

const Equipment = observer( () => {
  const [typeVisible, setTypeVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <div>
      <div className="main">
        <SideBar>
          <ul className="side-menu">
            <li><a className="side-menu_item" onClick={() => setTypeVisible(true)}><CalendarSVG/>Добавить тип</a></li>
            <li><a className="side-menu_item" onClick={() => setBrandVisible(true)}><KitSVG/>Добавить бренд</a></li>
            <li><a className="side-menu_item" onClick={() => setDeviceVisible(true)}><CameraSVG/>Добавить устройство</a></li>
          </ul>
          <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
          <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
          <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </SideBar>
        <div className={"main_page"}>
          <div className={"title_page"}>Оборудование</div>
          <div className={"main_layout"}></div>
        </div>
      </div>
    </div>
  );
});

export default Equipment;

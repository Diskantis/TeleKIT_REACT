import React from "react";

import SideBar from "../components/layouts/SideBar";

import { observer } from "mobx-react-lite";
import FormCreateRecipient from "../components/layouts/CreateRecipient";
import EmployeeSVG from "../components/UI/icon/EmployeeSVG";
import KitSVG from "../components/UI/icon/KitSVG";
import ListSideMenu from "../components/ListSideMenu";
import { RECIPIENT_ROUTE } from "../router/routes";
import ListRecipient from "../components/layouts/ListRecipient";

const Recipient = observer(() => {
  return (
    <div>
      <div className="main">
        <SideBar>
          <ListSideMenu
            items={[
              {
                icon: <KitSVG />,
                name: "Список получателей",
                link: RECIPIENT_ROUTE
              },
              {
                icon: <EmployeeSVG />,
                name: "Добавить нового получателя",
                link: RECIPIENT_ROUTE
              }
            ]}
          />
        </SideBar>
        <div className={"main_page"}>
          <div className={"title_page"}>Получатели оборудования</div>
          <div className={"main_layout"}>
            <FormCreateRecipient />
            <ListRecipient />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Recipient;

import React from "react";

import SideBar from "../components/layouts/SideBar";
import FormCreateRecipient from "../components/layouts/CreateRecipient";
import ListSideMenu from "../components/layouts/ListSideMenu";

import EmployeeSVG from "../components/UI/icon/EmployeeSVG";
import KitSVG from "../components/UI/icon/KitSVG";

import { RECIPIENT_LIST_ROUTE, RECIPIENT_NEW_ROUTE } from "../router/routes";

import { observer } from "mobx-react-lite";

const NewRecipient = observer(() => {
  return (
    <div>
      <div className="main">
        <SideBar>
          <ListSideMenu
            items={[
              {
                icon: <KitSVG />,
                name: "Список получателей",
                link: RECIPIENT_LIST_ROUTE
              },
              {
                icon: <EmployeeSVG />,
                name: "Добавить нового получателя",
                link: RECIPIENT_NEW_ROUTE
              }
            ]}
          />
        </SideBar>
        <div className={"main_layout"}>
          <div className={"title_page"}>Получатели оборудования</div>
          <div className={"main_page"}>
            <FormCreateRecipient />
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewRecipient;

import Login from "../pages/Login";
import Main from "../pages/Main";

import Schedule from "../pages/Schedule";
import Kits from "../pages/Kits";
import KitPage from "../pages/KitPage";
import Equipment from "../pages/Equipment";

import NewRecipient from "../pages/RecipientNew";
import ListRecipient from "../pages/RecipientList";

import NewAdmin from "../pages/AdminNewAdmin";
import NewEquipment from "../pages/AdminNewEquipment";

export const LOGIN_ROUTE = "/login";

export const MAIN_ROUTE = "/";
export const ADMIN_CREATE_ADMIN_ROUTE = "/admin/create_admin";
export const ADMIN_CREATE_EQUIPMENT_ROUTE = "/admin/create_equipment";

export const SCHEDULE_ROUTE = "/schedule";
export const KITS_ROUTE = "/kits";
export const EQUIPMENT_ROUTE = "/equipment";

export const RECIPIENT_NEW_ROUTE = "/recipient/new";
export const RECIPIENT_LIST_ROUTE = "/recipient/list";

export const authRoutes = [
  { path: MAIN_ROUTE, Component: Main },

  { path: ADMIN_CREATE_ADMIN_ROUTE, Component: NewAdmin },
  { path: ADMIN_CREATE_EQUIPMENT_ROUTE, Component: NewEquipment },

  { path: SCHEDULE_ROUTE, Component: Schedule },
  { path: KITS_ROUTE, Component: Kits },
  { path: KITS_ROUTE + "/:id", Component: KitPage },
  { path: EQUIPMENT_ROUTE, Component: Equipment },

  { path: RECIPIENT_NEW_ROUTE, Component: NewRecipient },
  { path: RECIPIENT_LIST_ROUTE, Component: ListRecipient }
];

export const publicRoutes = [{ path: LOGIN_ROUTE, Component: Login }];

import Login from "../pages/Login";
import Main from "../pages/Main";

import Schedule from "../pages/Schedule";
import Kits from "../pages/Kits";
import KitPage from "../pages/KitPage";
import Equipment from "../pages/Equipment";
import DevicePage from "../pages/temp/DevicePage";
import RecipientList from "../pages/RecipientList";
import NewRecipient from "../pages/RecipientNew";

import NewAdmin from "../pages/AdminNewAdmin";
import NewEquipment from "../pages/AdminNewEquipment";

import Shop from "../pages/temp/Shop";
import Basket from "../pages/temp/Basket";
import Registration from "../pages/temp/Registration";

export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";

export const MAIN_ROUTE = "/";
export const ADMIN_CREATE_ADMIN_ROUTE = "/admin/create_admin";
export const ADMIN_CREATE_EQUIPMENT_ROUTE = "/admin/create_equipment";

export const SCHEDULE_ROUTE = "/schedule";
export const KITS_ROUTE = "/kits";
export const EQUIPMENT_ROUTE = "/equipment";
export const DEVICE_ROUTE = "/device";

export const RECIPIENT_NEW_ROUTE = "/recipient/new";
export const RECIPIENT_LIST_ROUTE = "/recipient/list";

export const SHOP_ROUTE = "/shop";
export const BASKET_ROUTE = "/basket";

export const authRoutes = [
  { path: MAIN_ROUTE, Component: Main },

  { path: ADMIN_CREATE_ADMIN_ROUTE, Component: NewAdmin },
  { path: ADMIN_CREATE_EQUIPMENT_ROUTE, Component: NewEquipment },

  { path: SCHEDULE_ROUTE, Component: Schedule },
  { path: KITS_ROUTE, Component: Kits },
  { path: KITS_ROUTE + "/:id", Component: KitPage },
  { path: EQUIPMENT_ROUTE, Component: Equipment },
  { path: DEVICE_ROUTE + "/:id", Component: DevicePage },

  { path: RECIPIENT_NEW_ROUTE, Component: NewRecipient },
  { path: RECIPIENT_LIST_ROUTE, Component: RecipientList }
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Login },

  { path: REGISTRATION_ROUTE, Component: Registration },
  { path: SHOP_ROUTE, Component: Shop },
  { path: BASKET_ROUTE, Component: Basket }
];

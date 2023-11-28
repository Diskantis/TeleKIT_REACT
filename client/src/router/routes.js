import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Admin from "../pages/Admin";
import Main from "../pages/Main";

import Schedule from "../pages/Schedule";
import Kits from "../pages/Kits";
import KitPage from "../pages/KitPage";
import Equipment from "../pages/Equipment";
import DevicePage from "../pages/DevicePage";
import Employee from "../pages/Employee";

import Shop from "../pages/Shop";
import Basket from "../pages/Basket";

export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";

export const ADMIN_ROUTE = "/admin";
export const MAIN_ROUTE = "/";
export const SCHEDULE_ROUTE = "/schedule";
export const KITS_ROUTE = "/kits";
export const EQUIPMENT_ROUTE = "/equipment";
export const DEVICE_ROUTE = "/device";
export const EMPLOYEE_ROUTE = "/employee";

export const SHOP_ROUTE = "/shop";
export const BASKET_ROUTE = "/basket";

export const authRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: MAIN_ROUTE, Component: Main },
  { path: SCHEDULE_ROUTE, Component: Schedule },
  { path: KITS_ROUTE, Component: Kits },
  { path: KITS_ROUTE + "/:id", Component: KitPage },
  { path: EQUIPMENT_ROUTE, Component: Equipment },
  { path: DEVICE_ROUTE + "/:id", Component: DevicePage },
  { path: EMPLOYEE_ROUTE, Component: Employee }
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Login },
  { path: REGISTRATION_ROUTE, Component: Registration },
  { path: SHOP_ROUTE, Component: Shop },
  { path: BASKET_ROUTE, Component: Basket }
];
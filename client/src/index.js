import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import RecipientStore from "./store/RecipientStore";

const container = document.getElementById("root");
const root = createRoot(container);

export const Context = createContext(null);

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      recipient: new RecipientStore(),
      device: new DeviceStore()
    }}
  >
    <App />
  </Context.Provider>
);

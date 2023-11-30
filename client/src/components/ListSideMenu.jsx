import React from "react";
import { useHistory } from "react-router-dom";

const ListSideMenu = ({ items }) => {
  const history = useHistory();
  return (
    <ul className="side-menu">
      {items.map(item => (
        <li>
          <a className="side-menu_item" onClick={() => history.push(item.link)}>
            {item.icon}
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListSideMenu;

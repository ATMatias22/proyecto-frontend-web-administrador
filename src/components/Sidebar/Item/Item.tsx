import { NavLink } from "react-router-dom";
import "./styles.css";

type Props = {
  nameSection: string;
  icon: string;
  route: string;
};

export const Item = ({ nameSection, icon, route }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        "nav-link text-white mx-3 p-2 border-radius-simple sidebar-item " + (isActive ?'active':'')
      }
      to={route}
    >
      <li className="nav-item sidebar-container">
        <div className="text-white text-center me-2 d-flex align-items-center p-1">
          <i className={icon}></i>
          <span className="nav-link-text ms-2">{nameSection}</span>
        </div>
      </li>
    </NavLink>
  );
};

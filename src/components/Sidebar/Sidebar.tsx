import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ListItem } from "./ListItem/ListItem";
import { ButtonLogout } from "./ButtonLogout/ButtonLogout";
import { Header } from "./Header/Header";

interface Props {
  toggleButton: (n: boolean) => void;
  width: number;
}

export const Sidebar = ({ toggleButton, width }: Props) => {
  const closeHamburguer = ():void => {
    toggleButton(false);
  };

  return (
    <div className=" sidebar-style  " id="sidebar-wrapper">
      <Header width={width} closeHamburguer={closeHamburguer}/>
      <hr className="sidebar-hr" />
      <ListItem />
      <ButtonLogout />
    </div>
  );
};

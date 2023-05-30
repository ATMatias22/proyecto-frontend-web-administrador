import { imgLogo } from "../../../images/images";
import "./styles.css"

interface Props {
  width: number;
  closeHamburguer: () => void;
}

export const Header = ({ width, closeHamburguer }: Props) => {
  return (
    <div className="sidebar-header ">
      {width < 1200 && (
        <i
          className=" p-3 closer-hamburguer text-white opacity-5 position-absolute end-0 top-0  bi bi-x"
          onClick={closeHamburguer}
        ></i>
      )}
      <a
        className="navbar-brand m-0"
        href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
        target="_blank"
      >
        <img src={imgLogo} id="sidebar-icon" alt="logo" />
        <span className="ms-1 font-weight-bold text-white ms-2">Sensores</span>
      </a>
    </div>
  );
};

import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BreadCrums } from "../containers/ContainerForUseSidebar/ContainerForUseSidebar";



interface Props {
  onClick: () => void;
  width: number;
  breadcrums: BreadCrums;
}

export const Header = ({ onClick, width, breadcrums }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg mt-3 navbar-light bg-light  ">
      <div className="d-flex justify-content-between w-100 px-3 align-items-center  ">
        <nav aria-label="breadcrumb">
          <ol className=" breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item ">
              <span>Pages</span>
            </li>
            {breadcrums.route.map((bc) => (
              <li key={bc.id} className="breadcrumb-item">
                <span>{bc.name}</span>
              </li>
            ))}
          </ol>
          <h6 className="font-weight-bolder mb-0">{breadcrums.section_name}</h6>
        </nav>
        {width < 1200 && (
          <button
            className="btn btn-light"
            id="sidebarToggle"
            onClick={onClick}
          >
            <i className="bi bi-list"></i>
          </button>
        )}
      </div>
    </nav>
  );
};

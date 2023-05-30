import { Link } from "react-router-dom";
import { SUB_SECTION_ROUTE_SALES_ADD } from "../../../Sidebar/subsections";
import "./styles.css"

export const SalesAddButton = () => {
  return (
    <div className="mx-3 mb-5 d-flex">
      <Link
        to={SUB_SECTION_ROUTE_SALES_ADD.route}
        className=" btn-agregar-hardware-comprado button mt-4 col-12 col-md-3"
      >
        Agregar Venta
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import { SUB_SECTION_ROUTE_SALES_ADD, SUB_SECTION_ROUTE_SALES_VIEW_ORDER } from "../../../Sidebar/subsections";
//import "./styles.css"

export const SalesViewOrderButton = () => {
  return (
    <div className="mx-3 mb-5 d-flex">
      <Link
        to={SUB_SECTION_ROUTE_SALES_ADD.route}
        className=" btn-agregar-hardware-comprado button mt-4 col-12 col-md-3"
      >
        Ver Ordenes de Venta
      </Link>
    </div>
  );
}

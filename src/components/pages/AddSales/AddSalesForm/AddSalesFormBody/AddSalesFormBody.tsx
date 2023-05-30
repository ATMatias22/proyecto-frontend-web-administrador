import { Link } from "react-router-dom";
import { SECTION_ROUTE_SALES } from "../../../../Sidebar/sections";

export const AddSalesFormBody = () => {
  return (
    <div className="card-body">
      <form className="text-start">
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del comprador"
          />
        </div>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido del comprador"
          />
        </div>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Fecha de compra"
          />
        </div>
        <div className="input-group input-group-outline my-3">
          <input type="text" className="form-control" placeholder="Cantidad" />
        </div>
        <div className="input-group input-group-outline my-3">
          <input type="text" className="form-control" placeholder="Precio" />
        </div>
        <Link
          className="btn text-white bg-gradient-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_SALES.route}
        >
          Agregar
        </Link>

        <Link
          className="btn text-white bg bg-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_SALES.route}
        >
          Volver
        </Link>
      </form>
    </div>
  );
};

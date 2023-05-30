import { Link } from "react-router-dom";
import {   SECTION_ROUTE_USERS } from "../../../../Sidebar/sections";

export const ModifyUsersFormBody = () => {
  return (
    <div className="card-body">
      <form className="text-start">
        <div className="input-group input-group-outline my-3">
          <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="input-group input-group-outline my-3">
          <input type="text" className="form-control" placeholder="Apellido" />
        </div>

        <div className="input-group input-group-outline my-3">
          <input type="text" className="form-control" placeholder="Email" />
        </div>

        <div className="input-group input-group-outline my-3">
          <input type="text" className="form-control" placeholder="Dni" />
        </div>
        <Link
          className="btn text-white bg-gradient-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_USERS.route}
        >
          Modificar
        </Link>

        <Link
          className="btn text-white bg bg-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_USERS.route}
        >
          Volver
        </Link>
      </form>
    </div>
  );
};

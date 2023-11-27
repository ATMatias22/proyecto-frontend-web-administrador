
import { useState } from "react";
import { imgAdmin } from "../../../../../images/images";
import { User } from "../../intefaces";
import "./styles.css"

export const UserDataHeader = () => {

  const [data] = useState<User>(
    JSON.parse(window.localStorage.getItem("user") || "{}")
  );

  return (
    <div className="row gx-4 mb-2">
      <div className="col-auto">
        <div className="avatar avatar-xl position-relative">
          <img
            src={imgAdmin}
            alt="imagen de perfil"
            className="w-100 border-radius-lg shadow-sm"
          />
        </div>
      </div>
      <div className="col-auto my-auto">
        <div className="h-100">
          <h5 className="mb-1">{data.name + " " + data.lastname}</h5>
          <p className="mb-0 font-weight-normal text-sm">Administrador</p>
        </div>
      </div>
    </div>
  );
}

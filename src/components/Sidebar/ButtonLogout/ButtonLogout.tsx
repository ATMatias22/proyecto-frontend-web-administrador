import { useNavigate } from "react-router-dom";
import { INDEX } from "../sections";
import "./styles.css";

export const ButtonLogout = () => {
  const navigate = useNavigate();

  const deslog = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");

    navigate(INDEX.route);
  };

  return (
    <div className="mb-3 position-absolute w-100 bottom-0 ">
      <div className="mx-3">
        <button
          className="btn-cerrar-sesion mt-4 w-100 text-light"
          onClick={deslog}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

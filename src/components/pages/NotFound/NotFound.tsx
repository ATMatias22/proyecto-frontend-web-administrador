import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SECTION_ROUTE_PROFILE } from "../../Sidebar/sections";

export const NotFound = () => {

useEffect(() => {
  document.title = "Not found";
}, []);

  return (
    <main className="main-content  mt-0">
      <div className="bg-login">
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                {/* titulo */}
                <div className="container-title">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-2 pe-1">
                    <h2 className="text-white font-weight-bolder text-center mt-2 mb-0">
                      Error 404
                    </h2>
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                      No se encontro la ruta que se coloco
                    </h4>
                  </div>
                </div>

                {/* formulario */}
                <div className="card-body">
                  <Link
                    to={SECTION_ROUTE_PROFILE.route}
                    className="btn bg-gradient-primary w-100 my-4 mb-2 text-white"
                  >
                    {" "}
                    Volver al perfil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

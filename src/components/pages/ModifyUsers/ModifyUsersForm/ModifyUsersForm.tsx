import { ModifyUsersFormBody } from "./ModifyUsersFormBody/ModifyUsersFormBody";
import { ModifyUsersFormTitle } from "./ModifyUsersFormTitle/ModifyUsersFormTitle"
import "./styles.css"


export const ModifyUsersForm = () => {
  return (
    <div className="page-header align-items-start mt-5 px-3 ">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <ModifyUsersFormTitle/>
              <ModifyUsersFormBody/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

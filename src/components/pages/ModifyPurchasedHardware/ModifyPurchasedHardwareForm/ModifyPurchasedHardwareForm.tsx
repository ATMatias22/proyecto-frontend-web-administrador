import { ModifyPurchasedHardwareFormBody } from "./ModifyPurchasedHardwareFormBody/ModifyPurchasedHardwareFormBody";
import { ModifyPurchasedHardwareFormTitle } from "./ModifyPurchasedHardwareFormTitle/ModifyPurchasedHardwareFormTitle"
import "./styles.css"


export const ModifyPurchasedHardwareForm = () => {
  return (
    <div className="page-header align-items-start mt-5 px-3 ">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <ModifyPurchasedHardwareFormTitle/>
              <ModifyPurchasedHardwareFormBody/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

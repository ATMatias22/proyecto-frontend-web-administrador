//import "./styles.css"
import { ViewStockFormBody } from "./ViewStockFormBody/ViewStockFormBody";
import { ViewStockFormTitle } from "./ViewStockFormTitle/ViewStockFormTitle";


export const ViewStockForm = () => {
  return (
    <div className="page-header align-items-start mt-5 px-3 ">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <ViewStockFormTitle/>
              <ViewStockFormBody/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { ViewStockFormBodyHeader } from "./ViewStockFormBodyHeader/ViewStockFormBodyHeader";
import { ViewStockFormBodyItem } from "./ViewStockFormBodyItem/ViewStockFormBodyItem";
import axios from "axios";
import { useParams } from "react-router-dom";


interface stockItemDTO {
   stockId: number;
   deviceCode: string;
   devicePassword: string;
   placedOnAPhysicalDevice: boolean;
   }

export const ViewStockFormBody = () => {

    const [stock, setStock] = useState<stockItemDTO[]>();

     const { productId } = useParams();

useEffect(() => {

  //console.log(prodID)
  const URL = "http://localhost:8080/sensor/api/products/"+productId+"/stocks";

  const config: any = {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token"),
    },
  };
  axios
    .get(URL, config)
    .then((response) => {
      setStock(response.data);

    //  console.log(response.data)
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.data.error.message);
    });
}, []);

  return (
    <div className="card-body  px-0 pb-2">
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">

          <ViewStockFormBodyHeader />

          <tbody>
      {stock?.map((stock) => (
        <ViewStockFormBodyItem
          key={stock.stockId}
          stockId={stock.stockId}
          deviceCode={stock.deviceCode}
          devicePassword={stock.devicePassword}
          placedOnAPhysicalDevice={stock.placedOnAPhysicalDevice}
          
        />
      ))}
    </tbody>
      

        </table>
      </div>
    </div>
  );
}
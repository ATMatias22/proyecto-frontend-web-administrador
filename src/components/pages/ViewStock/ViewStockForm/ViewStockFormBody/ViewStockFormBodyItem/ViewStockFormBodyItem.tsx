import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import "./styles.css"

interface stockItemDTO {
  stockId: number;
  deviceCode: string;
  devicePassword: string;
  placedOnAPhysicalDevice: boolean;
}

export const ViewStockFormBodyItem = (stock: stockItemDTO) => {

  const [stockID, setStockID] = useState<number>(0);

  useEffect(() => {
    setStockID(stock.stockId);
  }, []);

  

  const cambiarEstadoAplicado = () => {
    if (localStorage.getItem("token")) {
      const token: string = JSON.stringify(localStorage.getItem("token"));

      const payload = token.split(".")[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);

      //const opcionOrden = window.localStorage.getItem("opcionOrden");

      const URL = "http://localhost:8080/sensor/api/stocks/" + stockID;

      const config: any = {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      };
      axios.patch(URL, {}, config)
        .then((res) => {
          console.log("cambiado a VERDADERO")
        })
        .catch((error) => {
          console.log(error.res.data);
          console.log(error.res.data.error.message);
        });
    }
  }

  return (
    <tr className="tr-body">
      <td>
        <div className="d-flex px-2 py-1">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{stock.stockId}</h6>
          </div>
        </div>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{stock.deviceCode}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{stock.devicePassword}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <input type="checkbox" defaultChecked={stock.placedOnAPhysicalDevice ? true : false} 
        disabled={stock.placedOnAPhysicalDevice ? true : false}
        onChange={cambiarEstadoAplicado} ></input>
      </td>
    </tr>
  );
}
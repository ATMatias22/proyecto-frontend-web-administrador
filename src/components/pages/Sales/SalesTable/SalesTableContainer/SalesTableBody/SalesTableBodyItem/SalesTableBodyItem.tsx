import axios from "axios";
import { Sale } from "../interfaces";
import "./styles.css"

export const SalesTableBodyItem = (sale: Sale) => {

  let fecha = sale.created.substring(0, 10);

  const fechaCompra = fecha;

  
      const opcionOrden = window.localStorage.getItem("opcionOrden");

  const cambiarEstadoTerminado = () => {

    if (localStorage.getItem("token")) {
      const token: string = JSON.stringify(localStorage.getItem("token"));

      const payload = token.split(".")[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);

      //const opcionOrden = window.localStorage.getItem("opcionOrden");

      const URL = "http://localhost:8080/sensor/api/sale-orders/admin/next-step/" + sale.saleOrderId;

      const config: any = {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      };

      axios.patch(URL, {}, config)
        .then((res) => {
          console.log("cambiado a TERMINADO")
        })
        .catch((error) => {
          console.log(error.res.data);
          console.log(error.res.data.error.message);
        });
    }
  }


  const cambiarEstadoCancelado = () => {

    if (localStorage.getItem("token")) {
      const token: string = JSON.stringify(localStorage.getItem("token"));

      const payload = token.split(".")[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);

      //const opcionOrden = window.localStorage.getItem("opcionOrden");

      const URL = "http://localhost:8080/sensor/api/sale-orders/admin/cancel/" + sale.saleOrderId;

      const config: any = {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      };

      

      axios.patch(URL, {}, config)
        .then((res) => {
          console.log("cambiado a CANCELADO")
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
            <h6 className="mb-0 text-sm">{sale.saleOrderId}</h6>
          </div>
        </div>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{sale.user.email}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{fechaCompra}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{sale.total}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{sale.state}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">Cambiar a Terminado</p>
        <button className="botonTerminado"
         disabled={opcionOrden == "ENTREGAR_PRODUCTOS" ? false : true}
        onClick={cambiarEstadoTerminado}>T</button>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">Cambiar a Cancelado</p>
        <button className="botonCancelado"
        disabled={opcionOrden == "CANCELADO" ? true : false}
        onClick={cambiarEstadoCancelado}>C</button>
      </td>
    </tr>
  );
}

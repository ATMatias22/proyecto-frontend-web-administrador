import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SUB_SECTION_ROUTE_SALES_MODIFY } from "../../../../../Sidebar/subsections";
import { Sale } from "../../../SalesTable/SalesTableContainer/SalesTableBody/interfaces";
import { SalesViewOrderTableBodyItem } from "./SalesViewOrderTableBodyItem/SalesViewOrderTableBodyItem";
//import "./styles.css"

export const SalesViewOrderTableBody = () => {

  const [sales, setSales] = useState<Sale[]>();

  const getOrdenVentaEstado = () => {

    if (localStorage.getItem("token")) {
      const token: string = JSON.stringify(localStorage.getItem("token"));

      const payload = token.split(".")[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);

      const opcionOrden = window.localStorage.getItem("opcionOrden");

      const URL = "http://localhost:8080/sensor/api/sale-orders/admin?state=" + opcionOrden;

      const config: any = {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      };

      axios
        .get(URL, config)
        .then((res) => {
          setSales(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error.res.data);
          console.log(error.res.data.error.message);
        });
    }
  }

  useEffect(() => {
    getOrdenVentaEstado();
  }, []);


  return (
    <tbody>
      {/*sales?.map((sale) => (
        <SalesViewOrderTableBodyItem
          key={sale.id}
          id={sale.id}
          namePurchaser={sale.namePurchaser}
          lastNamePurchaser={sale.lastNamePurchaser}
          productName={sale.productName}
          quantity={sale.quantity}
          datePurchase={sale.datePurchase}
        />
      ))*/}
    </tbody>
  );
}
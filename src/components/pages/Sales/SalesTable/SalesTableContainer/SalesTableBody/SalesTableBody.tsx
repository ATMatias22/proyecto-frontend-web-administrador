
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SUB_SECTION_ROUTE_SALES_MODIFY } from "../../../../../Sidebar/subsections";
import { Sale } from "./interfaces";
import { SalesTableBodyItem } from "./SalesTableBodyItem/SalesTableBodyItem";
import "./styles.css"

export const SalesTableBody = () => {

  const [sales, setSales] = useState<Sale[]>();

  useEffect(() => {
    const URL = "http://localhost:8080/sensor/api/sales/all";
    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios
      .get(URL, config)
      .then((response) => {
        setSales(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  }, []);


  return (
    <tbody>
      {sales?.map((sale) => (
        <SalesTableBodyItem
          key={sale.id}
          id={sale.id}
          namePurchaser={sale.namePurchaser}
          lastNamePurchaser={sale.lastNamePurchaser}
          productName={sale.productName}
          quantity={sale.quantity}
          datePurchase={sale.datePurchase}
        />
      ))}
    </tbody>
  );
}

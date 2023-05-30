import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY } from "../../../../../../Sidebar/subsections";
import { PurchasedHardware } from "../interfaces";
import "./styles.css";

export const PurchasedHardwareTableBodyItem = (ph: PurchasedHardware) => {
  const [id, setId] = useState<number>(0);


  useEffect(() => {
    setId(ph.id);
  }, []);


  const deletePh = () => {
    const URL =
      "http://localhost:8080/sensor/api/purchasedhardwares" + `/${id}`;

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    axios
      .delete(URL, config)
      .then((response) => {
        console.log(response);
        alert("Eliminado el producto comprado " + id);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  };

  return (
    <tr className="tr-body">
      <td>
        <div className="d-flex px-2 py-1">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{ph.id}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xs font-weight-bold mb-0">{ph.name}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{ph.quantity}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{ph.datePurchase}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">{ph.provider}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">${ph.price}</p>
      </td>
      <td className="align-middle text-center">
        <Link
          to={SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY.route + "/" + ph.id}
        >
          <i className="bi bi-pencil-square icon-black"></i>
        </Link>
      </td>
      <td className="align-middle text-center">
        <i
          className="bi bi-trash icon-black cursor-pointer"
          onClick={deletePh}
        ></i>
      </td>
    </tr>
  );
};

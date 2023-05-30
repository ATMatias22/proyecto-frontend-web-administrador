import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SUB_SECTION_ROUTE_PRODUCTS_MODIFY } from "../../../../../../Sidebar/subsections";
import { Product } from "../interfaces";
import "./styles.css"


export const ProductsTableBodyItem = (prod:Product) => {

  const [id,setId] = useState<number>(0);

  useEffect(() => {
    setId(prod.id)
  }, [])
  

  const deleteProduct = () => {
    const URL = "http://localhost:8080/sensor/api/products"+`/${id}`;

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    axios
      .delete(URL, config)
      .then((response) => {
        console.log(response);
        alert("Eliminado el producto "+ id)
       window.location.reload();

      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.data.error.message);
      });
  };


  return (
    <tr className="tr-body">
      <td className="align-middle text-center text-sm">
        <div className="d-flex px-2 py-1">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{prod.id}</h6>
          </div>
        </div>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{prod.name}</p>
      </td>
      <td className="align-middle text-center text-sm">
        <p className="text-xs font-weight-bold mb-0">{prod.description}</p>
      </td>
      <td className="align-middle text-center">
        <p className="text-xs font-weight-bold mb-0">${prod.price}</p>
      </td>
      <td className="align-middle text-center">
        <Link to={SUB_SECTION_ROUTE_PRODUCTS_MODIFY.route + "/" + prod.id}>
          <i className="bi bi-pencil-square icon-black"></i>
        </Link>
      </td>
      <td className="align-middle text-center">
        <i
          className="bi bi-trash icon-black cursor-pointer"
          onClick={deleteProduct}
        ></i>
      </td>
    </tr>
  );
}

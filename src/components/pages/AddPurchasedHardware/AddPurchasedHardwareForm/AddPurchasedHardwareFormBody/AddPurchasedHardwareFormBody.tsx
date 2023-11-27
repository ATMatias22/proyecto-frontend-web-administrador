import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SECTION_ROUTE_PURCHASED_HARDWARE } from "../../../../Sidebar/sections";

export const AddPurchasedHardwareFormBody = () => {
  const [nameProduct, setNameProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [datePurchase, setDatePurchase] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [idUser, setIdUser] = useState<number>();

  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  useEffect(() => {
    const dataUser = JSON.parse(window.localStorage.getItem("user") || "{}");
    setIdUser(dataUser.id);
  }, []);

  const clearForm = () => {
    setNameProduct("");
    setQuantity(0);
    setDatePurchase("");
    setProvider("");
    setPrice(0);
  };

  const addPh = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    const URL = "http://localhost:8080/sensor/api/purchased-hardwares";

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };

    const data = {
      name: nameProduct,
      quantity,
      datePurchase,
      provider,
      price,
      userId:idUser,
    };

    axios
      .post(URL, data, config)
      .then((response) => {
        console.log(response);
        setSuccess("Se creo producto comprado correctamente");
        clearForm();
        setError("");
      })
      .catch((error) => {
        success && setSuccess("");
        console.log(error.response.data);
        console.log(error.response.data.error.message);
        setError(error.response.data.error.message);
      });
  };

  return (
    <div className="card-body">
      {!!error && <div className=" alert alert-danger">{error}</div>}
      {!!success && <div className=" alert alert-success">{success}</div>}
      <form className="text-start" onSubmit={addPh}>
      <label>Nombre del producto:</label>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del producto"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setNameProduct(e.currentTarget.value)
            }
            value={nameProduct}
          />
        </div>
        <label>Cantidad:</label>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cantidad"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setQuantity(Number(e.currentTarget.value))
            }
            value={quantity}
          />
        </div>
        <label>Fecha de compra:</label>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="YYYY/MM/DD"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setDatePurchase(e.currentTarget.value)
            }
            value={datePurchase}
          />
        </div>
        <label>Proveedor:</label>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Proveedor"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setProvider(e.currentTarget.value)
            }
            value={provider}
          />
        </div>
        <label>Precio:</label>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Precio"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPrice(Number(e.currentTarget.value))
            }
            value={price}
          />
        </div>
        <button
          className="btn text-white bg-gradient-primary w-100 my-4 mb-2"
          type="submit"
        >
          Agregar
        </button>

        <Link
          className="btn text-white bg bg-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_PURCHASED_HARDWARE.route}
        >
          Volver
        </Link>
      </form>
    </div>
  );
};

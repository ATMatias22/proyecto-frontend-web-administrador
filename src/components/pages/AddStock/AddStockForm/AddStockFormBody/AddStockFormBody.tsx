import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { SECTION_ROUTE_PRODUCTS } from "../../../../Sidebar/sections";

type InputsFormsAddStock = {
 stock: number;
};

interface ProductStockDTO {
 quantity: number;
}

export const AddStockFormBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsFormsAddStock>({
    mode: "onChange",
  });

  //const [idUser, setIdUser] = useState<number>();

  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();


  const { productId } = useParams();
 /* useEffect(() => {
    const dataUser = JSON.parse(window.localStorage.getItem("user") || "{}");
    setIdUser(dataUser.id);
  }, []);*/

  const addStock = handleSubmit((data, event) => {
    event?.preventDefault();
    const URL = "http://localhost:8080/sensor/api/products/"+productId+"/stock";

    const config: any = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },

    };

    const productStockDTO: ProductStockDTO = {
    quantity: data.stock
    };

    axios
      .post(URL, productStockDTO, config)
      .then((response) => {
       // console.log(response);
        setSuccess("Se agrego el stock correctamente");
        event?.target.reset();
        setError("");
      })
      .catch((error) => {
        success && setSuccess("");
        console.log(error.response.data);
        console.log(error.response.data.error.message);
        setError(error.response.data.error.message);
      });
  });

  return (
    <div className="card-body">
      {!!error && <div className=" alert alert-danger">{error}</div>}
      {!!success && <div className=" alert alert-success">{success}</div>}

      <form className="text-start" onSubmit={addStock}>
        <div className=" input-group-outline my-3">
            <label>Cantidad de stock:</label>
          <input
            type="text"
            className={`${"form-control"} ${errors.stock && "cuadroError"}`}
            placeholder="20"
            {...register("stock", {
              required: {
                value: true,
                message: "Ingrese cantidad de stock",
              },
            })}
          />

          {errors.stock && (
            <span className={errors.stock && "mensajeError"}>
              {errors.stock.message}
            </span>
          )}
        </div>

        <button
          className="btn text-white bg-gradient-primary w-100 my-4 mb-2"
          type="submit"
        >
          Agregar
        </button>

        <Link
          className="btn text-white bg bg-primary w-100 my-4 mb-2"
          to={SECTION_ROUTE_PRODUCTS.route}
        >
          Volver
        </Link>
      </form>
    </div>
  );
};
